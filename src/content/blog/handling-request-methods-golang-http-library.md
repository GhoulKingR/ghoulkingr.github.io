---
title: "Handling request methods: Golang http library"
publishDate: 'Nov 07 2023'
tags:
  - Golang
---

Handling request methods in Golang's `net/http` library isn't as intuitive as you'd expect.

In the request, library there's a `Method` field that allows you to see what method a request uses.

```golang
func hello(w http.ResponseWriter, req *http.Request) {
  fmt.Fprintln(w, "Hello, world")
}
```

Starting with the example above, if you want the method to only respond to `GET` requests, add a conditional statement to make the request respond to only `GET` requests, and reject non-`GET` requests.

Take a look at an example of how the code will look after doing this:

```golang
func hello(w http.ResponseWriter, req *http.Request) {
  if req.Method == "GET" {
    fmt.Fprintln(w, "Hello, world")
  } else {
    w.WriteHeader(http.StatusMethodNotAllowed)
    fmt.Fprintf(w, "Cannot %s %s", req.Method, req.URL)
  }
}
```

You can apply this technique to any other type of request method, and you'll achieve the result you want.
