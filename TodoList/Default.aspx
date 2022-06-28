<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TodoList._Default" %>

<asp:Content ContentPlaceHolderID="StyleContent" runat="server">

    <link href="#" rel="stylesheet" />
       
</asp:Content>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="row  " style="padding: 70px">
        <div class="container flex-row justify-content-center">

            <div class="input-group mb-3"  id=" noteInput">
                <input type="text" class="form-control" placeholder="to do ... " aria-label="do to ... " aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-primary" id="submit" type="submit">add note </button>
                </div>
            </div>
        </div>
        <div class="container flex-row justify-content-center" id="notes">
            <ul class="list-group">
                <li class="list-group-item ">doto
                   <input type="checkbox" aria-label="Checkbox for following text input" id="checkBox">
                <li class="list-group-item"><s>Dapibus ac facilisis in</s></li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>

        </div>
    </div>
 


</asp:Content>


<asp:Content ContentPlaceHolderID="ScriptPlaceHolder" runat="server">

       <script src="Scripts/toDoList.js"></script>
    
</asp:Content>