<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TodoList._Default" %>

<asp:Content ContentPlaceHolderID="StyleContent" runat="server">

    <link href="#" rel="stylesheet" />

</asp:Content>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    
    <style>

        .list-group-item {

        }

    </style>

    <div class="row  " style="padding: 70px">
        <div class="container flex-row justify-content-center">

            <div class="input-group mb-3" id="inputForm">
                <input type="text" class="form-control" placeholder="to do ... " aria-label="do to ... " id="noteInput" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-primary" id="submit">add note </button>
                </div>
            </div>
        </div>
        <div class="container flex-row justify-content-center"">
            <ul class="list-group"  id="notes" >
                <li class="list-group-item">
                    <label>
                        todo 1
                        <input type="checkbox" name="checkbox">
                       <i class="bi bi-trash"></i>
                    </label>
                </li>
            </ul>

        </div>
    </div>



</asp:Content>


<asp:Content ContentPlaceHolderID="ScriptPlaceHolder" runat="server">

    <script src="Scripts/toDoList.js"></script>

</asp:Content>
