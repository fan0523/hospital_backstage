<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019/12/9
  Time: 13:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="${pageContext.request.contextPath}/static/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/static/bootstrap-3.3.7-dist/table/bootstrap-table.min.css" rel="stylesheet" />
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.2.1.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
    <script src="${pageContext.request.contextPath}/static/bootstrap-3.3.7-dist/table/bootstrap-table.js"></script>
    <script src="${pageContext.request.contextPath}/static/bootstrap-3.3.7-dist/table/locale/bootstrap-table-zh-CN.js"></script>
</head>
<body>
<div class="panel panel" style="height: 99%;width: 100%;border: 10px;">
    <div class="panel-heading" style="height: 6%;width: 100%;">
        <a><span style="font-size: 20px">首页</span></a>&nbsp;&nbsp;<span style="font-size: 20px">></span>&nbsp;&nbsp;<a><span style="font-size: 20px">在线咨询订单管理</span></a>
    </div>
    <div class="panel-body" style="height: 94%;width: 100%;">
        <ul id="myTab" class="nav nav-tabs">
            <li class="active">
                <a href="#home" data-toggle="tab">
                    未回答
                </a>
            </li>
            <li><a href="#ios" data-toggle="tab">已回答</a></li>
        </ul>
        <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active" id="home">
                <table id="unanswered_table"></table>
            </div>
            <div class="tab-pane fade" id="ios">
                <table id="answered_table"></table>
            </div>
        </div>
    </div>
</div>
</body>

<script type="text/javascript">
    $(function () {
        unanswered_all();
        answered_all();
    })
    /*未回答*/
    function unanswered_all() {
        $("#unanswered_table").bootstrapTable('destroy');
        $("#unanswered_table").bootstrapTable({ // 对应table标签的id
            url:"${pageContext.request.contextPath}/rent/findErAll",
            sidePagination:"client",//client客户端分  server服务器
            pageSize:10,
            columns: [
                {
                    align:'center',
                    field:'',
                    title:'序号',
                    formatter:function(value,row,index){
                        return index+1
                    }
                },
                {
                    title: "订单号",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "问题",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "提问时间",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "署名医生",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "已支付金额",
                    field: '',
                    align: 'center' // 居中显示
                },{
                    title: "退款倒计时",
                    field: '',
                    formatter: function (value, row, index) {

                    },
                    align: 'center' // 居中显示
                },{
                    title: "操作",
                    field: 'id',
                    formatter: function (value, row, index) {
                        var status = row.status;
                        var str = "";
                        str += " <button class='btn btn-primary' type='button' onclick=\"fabu(\'" + row.id + "\')\">回答</button>";
                        str += " <button class='btn btn-primary' type='button' onclick=\"fabu(\'" + row.id + "\')\">查看</button>";
                        return str;
                    },
                    align: 'center' // 居中显示
                }
            ]
        })
    }
    /*已回答*/
    function answered_all() {
        $("#answered_table").bootstrapTable('destroy');
        $("#answered_table").bootstrapTable({ // 对应table标签的id
            url:"${pageContext.request.contextPath}/rent/findErAll",
            sidePagination:"client",//client客户端分  server服务器
            pageSize:10,
            columns: [
                {
                    align:'center',
                    field:'',
                    title:'序号',
                    formatter:function(value,row,index){
                        return index+1
                    }
                },
                {
                    title: "订单号",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "问题",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "提问时间",
                    field: '',
                    align: 'center' // 居中显示
                },{
                    title: "回答时间",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "署名医生",
                    field: '',
                    align: 'center' // 居中显示
                },
                {
                    title: "已支付金额",
                    field: '',
                    align: 'center' // 居中显示
                },{
                    title: "操作",
                    field: 'id',
                    formatter: function (value, row, index) {
                        var status = row.status;
                        var str = "";
                        if(status=="unreleased"){
                            str += " <button class='btn btn-primary' type='button' onclick=\"fabu(\'" + row.id + "\')\">查看</button>";
                        }else {

                        }
                        return str;
                    },
                    align: 'center' // 居中显示
                }
            ]
        })
    }

</script>

</html>
