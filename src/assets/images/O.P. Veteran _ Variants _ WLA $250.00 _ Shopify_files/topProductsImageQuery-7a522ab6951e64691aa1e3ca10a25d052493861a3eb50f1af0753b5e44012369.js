(self.webpackJsonp=self.webpackJsonp||[]).push([["topProductsImageQuery"],{"./app/sections/Home/HomeIndex/components/HomeSidebar/components/TopProducts/components/ProductList/components/TopProductsImageQuery/graphql/TopProductsImageQuery.graphql":function(e,n,i){"use strict";i.r(n),n.default=JSON.parse('{"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopProductsImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"transformedSrc"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"50"}},{"kind":"Argument","name":{"kind":"Name","value":"maxHeight"},"value":{"kind":"IntValue","value":"50"}},{"kind":"Argument","name":{"kind":"Name","value":"scale"},"value":{"kind":"IntValue","value":"2"}}],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":168,"source":{"body":"query TopProductsImage($ids:[ID!]!){nodes(ids:$ids){...on Product{id featuredImage{id transformedSrc(maxWidth:50,maxHeight:50,scale:2)__typename}__typename}__typename}}","name":"GraphQL request","locationOffset":{"line":1,"column":1}}},"id":"6b8fe20da977cf2070430490b639aa3831c1e76aee913610c753ccd85536f0b3"}')}}]);