(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f8476f0","chunk-2d226c79","chunk-2d0b6378","chunk-2d20e852","chunk-2d0cbe28"],{"1be6":function(e,n,l){e.exports=l.p+"img/1677136009659.32cf46c7.png"},"4c25":function(e,n,l){e.exports=l.p+"img/1677137983405.32bed19c.jpg"},b05c:function(e,n,l){e.exports=l.p+"img/1677136496009.d5ebe235.png"},e15f:function(e,n,l){"use strict";l.r(n);var _=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,_=e._self._c||n;return _("section",[_("html",[_("head"),_("body",[_("h1",[e._v("ELasticsearch")]),_("h1",[e._v("1、倒排索引")]),_("h2",[e._v("1.1、倒排索引创建的过程")]),_("ul",[_("li",[e._v("搜索引擎中存储的是倒排索引，就是分好的词和词语文章的关联。")]),_("li",[e._v("实现把文章中词进行打散，以词为依据，然后关联上对应的文章。")]),_("li",[e._v("查询的时候，就是根据查词语找对对应的文章。")])]),_("p",[_("img",{attrs:{src:l("4c25"),alt:""}})]),_("h2",[e._v("1.2、搜索过程")]),_("ul",[_("li",[e._v("当用户搜索任意词条时，首先对用户输入的文本进行分词，获取需要搜索的词条。")]),_("li",[e._v("然后通过这个词条到倒排索引中去查询命中的词语。")]),_("li",[e._v("然后在根据这些命中的词语获取对应的文档id。")]),_("li",[e._v("然后在根据这些ID去获取文档数据。")])]),_("h1",[e._v("2、ES集群")]),_("p",[e._v("ES集群是由多个节点组成，通过cluster.name设置集群名字，并且用于区分其他集群，集群中每一个节点通过node.name指定节点名称。")]),_("p",[e._v("在ES集群中，存在的节点类型主要有四种。")]),_("ul",[_("li",[_("p",[e._v("master节点：")]),_("ul",[_("li",[e._v("节点配置文件的node.master属性值为true，默认值也为true，表示该节点在集群中有可能被选举成主节点。")]),_("li",[e._v("master节点控制整个集群的操作，比如：创建，删除索引的操作，管理其他非master节点。")])])]),_("li",[_("p",[e._v("data节点：")]),_("ul",[_("li",[e._v("节点配置文件的node.data属性值为true，默认值也是true，表示该节点在集群中有可能成为数据节点。")]),_("li",[e._v("data节点主要的用于对文档数据的操作。比如：对文档的CURD操作。")])])]),_("li",[_("p",[e._v("协调节点：")]),_("ul",[_("li",[e._v("配置文件中node.data 和node.master均为false。")]),_("li",[e._v("该节点不能作为主节点和数据节点。")]),_("li",[e._v("可以用来的响应用户的请求，把请求转发到其他节点。")])])])]),_("h1",[e._v("3、分片和副本")]),_("p",[e._v("添加数据到ES中，需要创建一个索引，一个用来存储数据的地方。其实索引只是用来指向一个分片或多个分片的逻辑命名空间。")]),_("ul",[_("li",[e._v("一个分片（shard）是一个最小级别的工作单元，分片只是保存索引中一小部分数据。")]),_("li",[e._v("一个分片就是一个lucene实例，并且它本身就一个完整的搜索引擎，应用程序不会直接和它通讯。")]),_("li",[e._v("分片可以分为主分片和复制分片。")]),_("li",[e._v("复制分片是主分片的一个副本，是防止主分片挂掉，造成数据丢失。")]),_("li",[e._v("当索引创建完成后，主分片的数量就固定了，但是复制分片的数量是可以调整的。")])]),_("p",[e._v("每一个索引上的数据会存在多个分片中，默认创建的索引是分片五个分片进行存储的，每一个分片都部署在分布式环境下多个节点上存。**索引的主分片定义好了，就不能在进行修改了。**为了数据的高可用，主分片可以对应多个复制分片，主分片和复制分片不能存放在同一台服务器上，避免服务宕机后，这个主分片的数据就丢失。")]),_("h1",[e._v("4、数据路由")]),_("p",[e._v("当客户端发起创建document的请求时，ES需要计算出该document存储在索引的哪一个分片上，这个过程就是数据路由。")]),_("p",[e._v("计算公式：")]),_("pre",{pre:!0},[_("code",{pre:!0,attrs:{"v-pre":""}},[e._v("路由算法：shard = hash(routing) % number_of_primary_shards\n")])]),_("p",[e._v("如果在查询数据时number_of_primary_shards发生变化，就无法获取数据。")]),_("p",[_("strong",[e._v("所以：主分区一旦确定了，就不能进行修改。")])]),_("ul",[_("li",[e._v("routing：是一个任意的字符串，它默认是文档的id，但是也可以自定义。")]),_("li",[e._v("这个routing字符串通过hash函数生成一个数字，然后除以主分片数量的余数。这个余数就是0 - 主分片 - 1的范围。")])]),_("h1",[e._v("5、ES操作")]),_("h2",[e._v("5.1、插入文档")]),_("p",[_("img",{attrs:{src:l("e9b1"),alt:""}})]),_("p",[e._v("新建文档的流程：")]),_("ul",[_("li",[e._v("client向node1发送新建请求，协调节点，通过hash算法可以计算可以计算出在哪一个分片上，然后路由到对应的节点 shard = hash(document_id) % number_of_primary)_shards。")]),_("li",[e._v("节点使用文档_id确定文档属于分片0，请求就会被转发到node3上，因为分片0在node3节点上。")]),_("li",[e._v("在node3上请求执行成功后，它就会将node3的分片0将数据复制到node1和node2上面，一旦所有的复制分片复制成功后，node3就向协调节点报告成功，协调节点向客户端报告成功。")])]),_("h2",[e._v("5.2、更新文档")]),_("p",[_("img",{attrs:{src:l("1be6"),alt:""}})]),_("ul",[_("li",[e._v("客户端想node1发送一个请求，node1作为协调节点，会根据文档id计算出该文档属于哪一个分片上，计算方法于上面数据路由计算方式一样。")]),_("li",[e._v("计算出该文档在分片0上，分片0在node3上，然后在将请求转发到node3上。")]),_("li",[e._v("node3上主分片检索文档，修改文档中source中数据。")]),_("li",[e._v("node3更新成功后，主分片就会将更新的数据分复制到node1和node2上副本分片上，当所有副本分片都返回成功后，node3向协调节点返回。此时协调节点会响应给client。")])]),_("h2",[e._v("5.3、删除文档")]),_("p",[_("img",{attrs:{src:l("b05c"),alt:""}})]),_("p",[e._v("该过程可以分为一些四个阶段：")]),_("ul",[_("li",[e._v("客户端向node1发送一个删除文档的请求。")]),_("li",[e._v("于上面相同，node1会计算除该文档处于哪一个分片上，但是操作是操作的主分片，计算得出需要操作分片在node3上。")]),_("li",[e._v("将请求转发到node3上，需要在主分片上操作。如果在node3上主分支删除成功后，会复制到所有副本分片上。")]),_("li",[e._v("当所有的副本分片成功后，才会返回到协调节点上，协调节点返回给client端。")])]),_("p",[e._v("ES是建立在lucene基础上的实时的分布式搜索引擎，lucene为了提高搜索的效率，所有lucene中的数据是不允许被修改的，这些文档存放在segment中，也就是说，一个segment写到存储系统中，就不能被修改的，lucene是如何删除一个文档呢？")]),_("ul",[_("li",[e._v("当用户发送一个删除请时，会先搜索到该文档。")]),_("li",[e._v("然后通过一个标记，来标记该文档已经被删除了。")]),_("li",[e._v("ES在segment中搜索时，可以搜索到该文档，但是该文档已经被标记为删除了。")]),_("li",[e._v("所以luecne在返回结果中会把删除的文档踢出。")]),_("li",[e._v("ES会有后台线程根据luecne的合并规则定期进行segment mering合并操作，删除文档在合并segment的时候，才会被真正的删除。")])]),_("h1",[e._v("6、ES优化")]),_("h2",[e._v("6.1、批量提交")]),_("ul",[_("li",[e._v("当有大量数据需要插入到ES中时，可以采用批量提交的方式查询。")]),_("li",[e._v("优化size大小，需要根据文档大小和服务器的性能来定。")])]),_("h2",[e._v("6.2、增加Refresh时间间隔")]),_("ul",[_("li")])])])])}],v=l("2877"),t={},r=Object(v["a"])(t,_,i,!1,null,null,null);n["default"]=r.exports},e9b1:function(e,n,l){e.exports=l.p+"img/1677134769658.06b5d9ef.jpg"}}]);
//# sourceMappingURL=chunk-3f8476f0.fd912d16.js.map