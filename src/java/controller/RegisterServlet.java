/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import dal.DAO;
import java.io.IOException;
import model.Account;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private DAO dao;

    @Override

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("user");
        String password = request.getParameter("pass");
        String confirmPassword = request.getParameter("repass");
        // Khởi tạo đối tượng DAO
        DAO dao = new DAO();

        // Check if passwords match
        if (!password.equals(confirmPassword)) {
            //response.sendRedirect("index.jsp");
            request.setAttribute("isRegister", 0);
            request.setAttribute("error", "Mật khẩu không khớp!!");
            //response.sendRedirect("index.jsp");
            request.getRequestDispatcher("index.jsp").forward(request, response);
            return;
        }

        int role = 2; // Default role

        Account account = new Account(username, password, role);

        
        boolean success = dao.saveAccount(account);

        if (success) {
            request.setAttribute("isRegister", 1);
            request.setAttribute("success", "Đăng ký thành công!!");
            request.getRequestDispatcher("index.jsp").forward(request, response);
        } else {
            request.setAttribute("isRegister", 2);
            request.setAttribute("error1", "Tài khoản đã tồn tại!!");
            //response.sendRedirect("index.jsp");
            request.getRequestDispatcher("index.jsp").forward(request, response);
        }
        
    }
    
}