<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TodoList._Default" %>

<asp:Content ContentPlaceHolderID="StyleContent" runat="server">

    <link href="#" rel="stylesheet" />

</asp:Content>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <style>
        .box {
            width: 100%;
            height: 100%;
            margin: auto;
            flex: auto;
        }
    </style>

    <div class="row box " style="padding: 70px">
        <div class=" col-lg-12 justify-content-center">
            <div class="input-group mb-3" id="inputForm">
            </div>
        </div>
        <div class=" col-md-12 justify-content-center ">
            <ul class="list-group" id="notes">
            </ul>
            <div class="input-group w-50">
                <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                    </svg>
                </span>
                <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="basic-addon1">
            </div>
        </div>
    </div>





</asp:Content>


<asp:Content ContentPlaceHolderID="ScriptPlaceHolder" runat="server">

    <script src="Scripts/toDoList.js"></script>

</asp:Content>
