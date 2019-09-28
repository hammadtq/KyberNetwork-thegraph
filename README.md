# KyberNetwork-thegraph

![Screenshot](screenshot.png)

This subgraph explores Kyber's permissionless reserve smart-contracts to compile a list of tokens that are now presented as permissionless reserves, their trade volume, liquidity situation and over all Kyber trade volume.

The subgraph can easily be extended to other Kyber reserve types once a [issue]( https://github.com/graphprotocol/support/issues/33) with thegraph gets resolved!

The information gathered by this subgraph is now being used in a live website called [dSwaps.com](http://dswaps.com)

You can also add these stats and other useful information from Kyber by using GraphQL supported API endpoints given below:

```
Queries (HTTP)
https://api.thegraph.com/subgraphs/name/hammadtq/kybernetwork
Subscriptions (WS)
wss://api.thegraph.com/subgraphs/name/hammadtq/kybernetwork
```

To play with this subgraph, head-over to the [hosted version at thegraph](https://thegraph.com/explorer/subgraph/hammadtq/kybernetwork) website.
