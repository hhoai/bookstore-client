/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import model.Book;

/**
 *
 * @author Van Manh
 */
public class BookDAO extends DBContext{
//    public List<Book> getAllBook() {
//        List<Book> list = new ArrayList<>();
//        String sql = "select * from Book";
//        try {
//            PreparedStatement st = connection.prepareStatement(sql);
//            ResultSet rs = st.executeQuery();
//            while (rs.next()) {
//                Book c = new Book();
//                c.setId(rs.getInt("id"));
//                c.setImg(rs.getString("img"));
//                c.setName(rs.getString("name"));
//                c.setCategoryID(rs.getInt("categoryID"));
//                c.setDecription(rs.getString("decription"));
//                c.setPrice(rs.getFloat("price"));
//                c.setSale(rs.getFloat("sale"));
//                c.setQuantity(rs.getInt("quantity"));
//                list.add(c);
//            }
//        } catch (SQLException e) {
//            System.out.println(e);
//        }
//        return list;
//    }
    public List<Book> getAllBook() {
    List<Book> books = new ArrayList<>();

    try {
        // Tạo câu truy vấn SQL để lấy dữ liệu từ bảng Book
        String query = "SELECT * FROM Book";

        // Thực hiện truy vấn
        ResultSet rs = connection.createStatement().executeQuery(query);

        // Lặp qua các dòng kết quả và tạo các đối tượng Book
        while (rs.next()) {
            Book book = new Book();
            book.setId(rs.getInt("id"));
            book.setImg(rs.getString("img"));
            book.setName(rs.getString("name"));
            book.setCategoryID(rs.getInt("categoryID"));
            book.setDecription(rs.getString("decription"));
            book.setPrice(rs.getFloat("price"));
            book.setSale(rs.getFloat("sale"));
            book.setQuantity(rs.getInt("quantity"));

            books.add(book);
        }

        // Đóng ResultSet và câu truy vấn
        rs.close();
        connection.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }

    return books;
}

    
    
    
    public static void main(String[] args) {
        BookDAO c = new BookDAO();
        List<Book> list = c.getAllBook();
        System.out.println(list.get(0).getId());
        System.out.println(list.get(0).getImg());
        System.out.println(list.get(0).getName());
        System.out.println(list.get(0).getCategoryID());
        System.out.println(list.get(0).getDecription());
        System.out.println(list.get(0).getPrice());
        System.out.println(list.get(0).getSale());
        System.out.println(list.get(0).getQuantity());
    }
    
}
