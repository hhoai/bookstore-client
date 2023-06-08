/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

/**
 *
 * @author Van Manh
 */
//  id int primary key,
//   img ntext,
//   name nvarchar(30) ,
//   category nvarchar(30),
//   description ntext,
//   price money,
//   sale float,
//   quantity int
public class Book {
    private int id;
    private String img;
    private String name;
    private int categoryID;
    private String decription;
    private float price;
    private float sale;
    private int quantity;

    public Book() {
    }

    public Book(int id, String img, String name, int categoryID, String decription, float price, float sale, int quantity) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.categoryID = categoryID;
        this.decription = decription;
        this.price = price;
        this.sale = sale;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public String getImg() {
        return img;
    }

    public String getName() {
        return name;
    }

    public int getCategoryID() {
        return categoryID;
    }

    public String getDecription() {
        return decription;
    }

    public float getPrice() {
        return price;
    }

    public float getSale() {
        return sale;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public void setDecription(String decription) {
        this.decription = decription;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setSale(float sale) {
        this.sale = sale;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    
    
}
