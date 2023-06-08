/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;

import java.util.ArrayList;
import java.util.List;
import model.Category;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Van Manh
 */
public class CategoryDAO extends DBContext {

    //Đọc tất cả các bản ghi từ table Categories
    public List<Category> getAllCategory() {
        List<Category> list = new ArrayList<>();
        String sql = "select * from Category";
        try {
            PreparedStatement st = connection.prepareStatement(sql); 
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                Category c = new Category(rs.getInt("categoryID"),rs.getString("categoryName"));
                list.add(c);
            }
        } catch (SQLException e) {
            System.out.println(e);
        }
        return list;
    }

    public void insert(Category c) {
        String sql = "INSERT INTO [dbo].[Categories]\n"
                + "           ([ID]\n"
                + "           ,[name]\n"
                + "     VALUES(?,?)";
        //String sql="insert into Categories values(?,?,?)";
        
        try {
            PreparedStatement st=connection.prepareCall(sql);
            /*
            Phương thức prepareCall(sql) được sử dụng để chuẩn bị một câu lệnh SQL cho các thủ tục lưu trữ (stored 
            procedure), trong khi đó phương thức prepareStatement(sql) được sử dụng để chuẩn bị một câu lệnh SQL 
            cho các truy vấn đơn giản hoặc các câu lệnh SQL khác.
            
            Phương thức prepareCall(sql) cung cấp một số tính năng bổ sung cho việc sử dụng thủ tục lưu trữ, chẳng 
            hạn như đối với các thủ tục lưu trữ trả về nhiều bộ kết quả (multiple result sets) hoặc sử dụng các 
            tham số OUT để truy xuất các giá trị được trả về từ thủ tục lưu trữ. Trong khi đó, phương thức 
            prepareStatement(sql) chỉ hỗ trợ cho việc thực thi truy vấn đơn giản và truy xuất các bản ghi từ các 
            bảng dữ liệu.
            */
            st.setInt(1,c.getCategoryID());
            st.setString(2,c.getCategoryName());
            
            st.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }
    
    //Tìm một category khi có id
    public Category getCategoryById(int id) {
        String sql = "select * from Categories where id=?";
        try {
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, id);
            ResultSet rs = st.executeQuery();
            if (rs.next()) {
                Category c = new Category(rs.getInt("categoryID"),
                        rs.getString("categoryName"));
                return c;
            }
        } catch (SQLException e) {
            System.out.println(e);
        }
        return null;
    }
    public static void main(String[] args) {
        CategoryDAO c = new CategoryDAO();
        List<Category> list = c.getAllCategory();
        System.out.println(list.get(0).getCategoryID());
    }

}
