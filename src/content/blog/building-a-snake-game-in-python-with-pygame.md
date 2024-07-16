---
title: "Building a snake game in Python with PyGame"
publishDate: 'Jul 25 2024'
tags:
  - Guide
seo:
  image:
    src: 'https://github.com/GhoulKingR/snake-tutorial/blob/main/images/Screen%20Recording%202024-06-24%20at%2019.27.48.gif?raw=true'
    alt: A person standing at the window
---

This is a guide that explains the processes that go into building [this snake game](https://github.com/GhoulKingR/snake-tutorial/blob/main/game.py).

![Game](https://github.com/GhoulKingR/snake-tutorial/blob/main/images/Screen%20Recording%202024-06-24%20at%2019.27.48.gif?raw=true)

## Setting up the coding environment
To build the game, you have to install PyGame. Run this command to install it:
```bash
pip install pygame
```

I prefer building my Python projects in a virtual environment, and that's what I used in building this application. If you run into dependency problems, try installing it in a virtual environment and using it there. Instead of on the global python install.

Next, I created a new `game.py` file where I'll be writing and editing all the code for this project.

## Set up the PyGame window
On computers, any GUI application has to be in a window. In this section, I explain how I set up the window for the game.

All you need to do to set up with window is to write this code into `game.py`:
```python
import pygame

pygame.init()
screen = pygame.display.set_mode((720, 720))
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill("gray")
    pygame.display.flip()
    clock.tick(20)

pygame.quit()
```

When you run `python game.py`, you will see a gray window appear on your desktop. Like this:

![Gray screen](https://github.com/GhoulKingR/snake-tutorial/blob/main/images/Screenshot%202024-06-22%20at%2023.28.41.png?raw=true)

Here's how the code works works:
1. Import PyGame into the script
    ```python
    import pygame
    ```
2. Initialize all the PyGame modules
    ```python
    pygame.init()
    ```
3. Create a display surface with a width and height of 720 pixels
    ```python
    screen = pygame.display.set_mode((720, 720))
    ```
4. Create a clock object to control the game's framerate
    ```python
    clock = pygame.time.Clock()
    ```
5. Starts a game loop that will run indefinitely until the user tries to quit the window
    ```python
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
    ```
6. Fill the surface with the color gray
    ```python
        # in while loop
        screen.fill("gray")
    ```
7. Update the full display surface to the screen
    ```python
        # in while loop
        pygame.display.flip()
    ```
8. Limit the runtime speed of the game to 20 frames per second
    ```python
        # in while loop
        clock.tick(20)
    ```
9. Uninitialize all the PyGame modules
    ```python
    # when the loop is broken
    pygame.quit()
    ```

## Working on the snake
To represent the snake, I created a variable called `snake` and stored a dictionary that contains details that make up the snake in it. The details in the dictionary are:
* The position of the snake's head
* An array of vectors to represent the position of where the circles that make up the snake's body are
* The length of the snake
* The direction that its head is moving in.

Here's the code for this:
```python
snake = {
    "head": pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2),
    "body": [],
    "length": 1,
    "direction": pygame.Vector2(0, 10),
}
```

After that, I created a `draw` function, for drawing the snake. Later in the guide, I'll modify this function to draw everything we need to be rendered on the display surface:
```python
def draw (snake):
    # draw snake
    for element in snake['body']:
        pygame.draw.circle(screen, "purple", element, 4)
    pygame.draw.circle(screen, "green", snake['head'], 5)
```

To represent the head of the snake, we're using a circle of radius 5 pixels. And to represent every list item that makes up its body we're using purple circles of radius 4 pixels.

Lastly, I called the `draw` function after `screen.fill` and before `pygame.display.fill`, so that the snake gets drawn to the display surface after it has been filled with the color gray:
```python
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill("gray")
    draw(snake)
    pygame.display.flip()
    clock.tick(20)
```

Running this now should give you a green dot on the screen like this:
![Screenshot](https://github.com/GhoulKingR/snake-tutorial/blob/main/images/Screenshot%202024-06-22%20at%2023.27.50.png?raw=true)

### Moving the snake
To make the snake move, we'll create a `move` function where we'll write the code that updates the position of the snake's head, modify the list of vectors in the snake's `body` array, and makes any other transformation that it needs to on the snake.

Here's the function:
```python
def move(snake):
    snake['body'].append(snake['head'].copy())

    while len(snake['body']) > snake['length']:
        snake['body'].pop(0)

    snake['head'].y += snake['direction'].y
    snake['head'].x += snake['direction'].x

    snake['head'].y %= 720
    snake['head'].x %= 720
```

The snake's `body` array is just a collection of all the previous positions that the head has been at. Here's how this function works:
1. When the position of the snake's head is about to be updated, a copy of its current vector is appended to the snake's `body` array.
    ```python
    snake['body'].append(snake['head'].copy())
    ```
2. the start of the `body` list is removed as many times as it needs to maintain a length that is equal to the value of the snake's `length`
    ```python
    while len(snake['body']) > snake['length']:
        snake['body'].pop(0)
    ```

3. Its head x and y values are incremented with the x and y values of the snake's `direction` vector.
    ```python
    snake['head'].y += snake['direction'].y
    snake['head'].x += snake['direction'].x
    ```

4. To make the snake come out of the opposite end when it goes out of bounds in any direction, I used the modulo operator. `721 % 720` is `1`, `722 % 720` is `2` and it goes on like that. It also works similarly for negatives `-2 % 720` is `718`, `-3 % 720` is `717`, and so on.
    ```python
    snake['head'].y %= 720
    snake['head'].x %= 720
    ```

Finally, I placed the `move` function call line under `screen.fill` and before `draw` to make the new position of the snake drawn to the screen when we call the `draw` function:
```python
while running:
    # ...
    screen.fill("gray")
    move(snake)
    draw(snake)
```

When you run the game at this stage, you should see the snake moving downwards.

### Controlling the snake
In this section, we'll define a `control` function that will listen for `UP, DOWN, LEFT, RIGHT` arrow key inputs from the keyboard, and change the direction of the snake to match which key is pressed.

Here's the function definition for `control`:
```python
def control(snake):
    keys = pygame.key.get_pressed()
    if keys[pygame.K_UP]:
        if snake['direction'].x != 0:
            snake['direction'].x = 0
            snake['direction'].y = -10
    elif keys[pygame.K_DOWN]:
        if snake['direction'].x != 0:
            snake['direction'].x = 0
            snake['direction'].y = 10
    elif keys[pygame.K_LEFT]:
        if snake['direction'].y != 0:
            snake['direction'].x = -10
            snake['direction'].y = 0
    elif keys[pygame.K_RIGHT]:
        if snake['direction'].y != 0:
            snake['direction'].x = 10
            snake['direction'].y = 0
```

The function retrieves a sequence of the state of all the keys on the keyboard. `False` if they're not pushed down and `True` if they are.

Next, I use the `K_UP`, `K_DOWN`, `K_LEFT`, and `K_RIGHT` constants to check the state of the up, down, left, and right arrow keys to know which of them the player is pushing down.

Finally, I updated the snake's `direction` vector accordingly. To restrict the snake's movement to its left or its, I had to use these conditions:
* `snake['direction'].x != 0`: `x` being `0` means it is either moving up or down already.
* `snake['direction'].y != 0`: `y` being `0` means it is either moving left or right already.

Now, I placed the `control` function call line just before calling `move`, to make sure that the direction of the snake is updated before it moves:
```python
while running:
    # ...
    screen.fill("gray")
    control(snake)
    move(snake)
    draw(snake)
```

## Working on the ball
In a snake game, the snake gets longer with each piece of food eaten. For consistency, I'll use the word "ball" to reference this piece of food.

In this section, I'll explain how I added the ball to the game. Since the only important quality of the ball is its position, you can initialize its variable as a vector.

We also want it to be randomly positioned, so I'll initialize it this way:
```python
ball = randomly_position()
```

And define the `randomly_position` function like so:
```python
def randomly_position():
    return pygame.Vector2(
        random.randint(1, 71) * 10,
        random.randint(1, 71) * 10,
    )
```

Importing the `random` library into the script is important for the function to work:
```python
import random
```

Lastly, I'll update the `draw` function to accept the ball as input and draw it on the screen:
```python
def draw (snake, ball):
    # draw snake
    for element in snake['body']:
        pygame.draw.circle(screen, "purple", element, 4)
    pygame.draw.circle(screen, "green", snake['head'], 5)

    # draw ball
    pygame.draw.circle(screen, "red", ball, 5)
```

Then, update the `draw` function call line to this:
```python
draw(snake, ball)
```

*Note: The `randomly_place` function is a very simple implementation of the random positioning mechanism. If the snake gets long enough, the ball might start to overlap with its body. Or might be in weird places.*

### Colliding with the ball
To detect whether the snake has eaten the ball, I built a simple collision detection mechanism in a `collided` function and set it up in the game loop.

Here's how the function looks:
```python
def collided(head, obj):
    if head.x == obj.x and head.y == obj.y:
        return True

    return False
```

Since the snake moves in a grid-like pattern, we can check if its head and the ball collide, by seeing if they overlap. That's how this function works. If two objects overlap, they'll be in the same x and y position.

To set it up in the game loop, you'll need to add an if condition that triggers its code block if the snake's head overlaps with the ball. Here's the update for it:
```python
while running:
    # ...

    screen.fill("gray")
    control(snake)
    move(snake)

    if collided(snake['head'], ball):
        ball = randomly_position()
        snake['length'] += 1

    draw(snake, ball)
    pygame.display.flip()
```

Since part of the rules of a snake game is to change the position of the ball to somewhere random and to increase the length of the snake, I added these two lines to the if block:
```python
        ball = randomly_position()
        snake['length'] += 1
```

### The Game-over screen
A snake game ends when its head collides with its body. In this section, I'll use the `collided` function to set up this collision detection and write the script for the game over screen.

This is the screen I want to show when the game ends:
![Game over](https://github.com/GhoulKingR/snake-tutorial/blob/main/images/Screenshot%202024-06-24%20at%2016.12.07.png?raw=true)

I started by updating the `draw` function to display the screen only when a condition `show_end_screen` is `True`:
```python
def draw (snake, ball, show_end_screen):
    # draw snake
    for element in snake['body']:
        pygame.draw.circle(screen, "purple", element, 4)
    pygame.draw.circle(screen, "green", snake['head'], 5)

    # draw ball
    pygame.draw.circle(screen, "red", ball, 5)

    if show_end_screen:
        # draw end screen
        pygame.draw.rect(screen, (0, 0, 0), (90, 110, 520, 520))
        pygame.draw.rect(screen, (100, 100, 100), (100, 100, 520, 520))

        font = pygame.font.Font('font.ttf', 32)
        smaller_font = pygame.font.Font('font.ttf', 16)

        text = font.render('Game Over', True, (0, 0, 0))
        textRect = text.get_rect()
        textRect.center = (360, 340)
        screen.blit(text, textRect)

        smaller_text = smaller_font.render('Press \'r\' to restart.', True, (0, 0, 0))
        smaller_textRect = smaller_text.get_rect()
        smaller_textRect.center = (360, 370)
        screen.blit(smaller_text, smaller_textRect)

        even_smaller_text = smaller_font.render(f'Score: {snake["length"] - 1}', True, (0, 0, 0))
        even_smaller_textRect = even_smaller_text.get_rect()
        even_smaller_textRect.center = (360, 390)
        screen.blit(even_smaller_text, even_smaller_textRect)
```

Here's a breakdown of how the end screen is drawn:
1. Draw two rectangles at the center of the screen. One offset and behind the other to look like a shadow
  ```python
pygame.draw.rect(screen, (0, 0, 0), (90, 110, 520, 520))
pygame.draw.rect(screen, (100, 100, 100), (100, 100, 520, 520))
  ```
2. Initialize two font objects, `font` and `smaller_font`, with the same font file but with `font`'s font size half as small as `smaller_font`.
  ```python
font = pygame.font.Font('font.ttf', 32)
smaller_font = pygame.font.Font('font.ttf', 16)
  ```
3. Use the font object with the bigger font size to render the "Game Over" text.
  ```python
text = font.render('Game Over', True, (0, 0, 0))
textRect = text.get_rect()
textRect.center = (360, 340)
screen.blit(text, textRect)
  ```
4. Use the object with the smaller font size to render "Press 'r' to restart" underneath the "Game Over" text.
  ```python
smaller_text = smaller_font.render('Press \'r\' to restart.', True, (0, 0, 0))
smaller_textRect = smaller_text.get_rect()
smaller_textRect.center = (360, 370)
screen.blit(smaller_text, smaller_textRect)
  ```
5. Use the object with the smaller font size to render the player's final score underneath "Press 'r' to restart."
  ```python
even_smaller_text = smaller_font.render(f'Score: {snake["length"] - 1}', True, (0, 0, 0))
even_smaller_textRect = even_smaller_text.get_rect()
even_smaller_textRect.center = (360, 390)
screen.blit(even_smaller_text, even_smaller_textRect)
  ```

You'll need a font to render the text, and I'll link [the one I used](https://github.com/GhoulKingR/snake-tutorial/blob/main/font.ttf) to this guide.

I also added a new argument to the `draw` function definition called `show_end_screen`. After defining the function, I modified the `draw` function call line to pass a value to the `show_end_screen` argument, and created a `show_end_screen` variable outside the game loop to be the state variable:
```python
show_end_screen = False

while running:
    # ...

    draw(snake, ball, show_end_screen)
```

Now, I use the `collided` function to detect a collision between the snake's head and body:
```python
while running:
    # ...

    for i, body in enumerate(snake['body']):
        if collided(snake['head'], body):
            show_end_screen = True
            break
```

If the snake's head collides with its body, `show_end_screen` is set to True.

While `show_end_screen` is `True`, the snake shouldn't be moving and the game should be getting ready to restart when the user pushes the key `r` on their keyboard.
```python
while running:
    # ...
    if not show_end_screen:
        move(snake)
    else:
        keys = pygame.key.get_pressed()
        if keys[pygame.K_r]:
            snake = {
                "head": pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2),
                "body": [],
                "length": 1,
                "direction": pygame.Vector2(0, 10),
            }
            ball = randomly_position()
            show_end_screen = False
```

To do this, I used a single if-else statement. That if `show_end_screen` isn't `True`, the `if` block runs and the snake can move. If `show_end_screen` is `False`, the snake doesn't move, and instead the game checks for if the player is pushing the `r` key down, and restarts the game if they do.

## Conclusion

I hope this guide has been really helpful to you.

This guide is a step-by-step process of how I built the snake game with Python and PyGame. And I left a link to [its GitHub repository](https://github.com/GhoulKingR/snake-tutorial/tree/main) at the top of the article. I also left it here too.

Thanks for reading
