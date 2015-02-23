# protosketch-demo

A demonstration of some protosketching techniques.

To run locally, use an http server. Python has one:

```sh
$ python -m SimpleHTTPServer
```

Python3:

```sh
$ python3 -m http.server
```

## Problem definition

This demo assumes the following problem to solve:

> Every few weeks, our employees organize a bulk snack purchase. This process involves dozens of stakeholders and is usually tracked with pen and paper and some spreadsheets passed around via email. Too often, orders are lost in the mix and we spend significant resources fixing these mistakes. We need a web-based system for tracking and combining individual employee preferences into a single, consolidated order. We also have a separate payments system that lets employees chip in for their order. It would be great if we could combine that with the new ordering system.