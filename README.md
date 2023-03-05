# React

- [https://reactjs.org/](https://reactjs.org/)
- React là một thư viện Javascript để xây dựng giao diện người dùng.
- React hỗ trợ xây dựng trang web theo hướng single page application (SPA) [https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering](https://toidicodedao.com/2018/09/11/su-khac-biet-giua-server-side-rendering-va-client-side-rendering)
- VSCode extensions:
  ◦ [https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  ◦ [https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx)
- Browser extensions:
  ◦ [https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## 1. Create-react-app

- [https://create-react-app.dev/](https://create-react-app.dev/)
- Cài đặt: npx create-react-app project-name
- CRA cung cấp bộ công cụ khởi tạo ứng dụng React, vì vậy bạn có thể đi vào xây dựng ứng dụng của mình mà không cần phải xử lý các cấu hình Webpack và Babel.

## 2. Component

- Components giúp phân chia những đoạn code của UI (giao diện người dùng) thành các phần độc lập để dễ dàng quản lý và tái sử dụng.
- Về cơ bản, component cũng giống một javascript function return về những phần tử React mô tả những gì sẽ xuất hiện trên giao diện.
- Luôn luôn bắt đầu component name với chữ cái in hoa React sẽ coi những component bắt đầu với chữ cái in thường là DOM tags. Ví dụ, `<div />` đại diện cho 1 thẻ div HTML, nhưng `<Welcome />` đại diện cho 1 component
- Có 2 loại component

```jsx
// Function component
function App() {
	return (
		<div>Hello World!!!<div>
	)
}
```

```jsx
// Class component
class App() {
	render() {
		return (
			<div>Hello World!!!<div>
		)
	}
}
```

- Snippets để tạo nhanh component:
- Function component: `rfce`
- Class component: `rcc`

## 3. JSX

- JSX = Javascript + XML
- React sử dụng JSX để biểu thị UI components
- JSX cho phép viết các phần tử HTML bằng JavaScript và đặt chúng trong DOM mà không cần bất kỳ phương thức như createElement() hoặc appendChild().
- Cú pháp JSX

```jsx
const title = "BC42 - React";
const jsx = (
  <section className="app">
    <h1>{title}</h1>
  </section>
);
```

- Code JSX nếu được viết bằng Javascript thuần

```jsx
const title = "BC42 - React";
const jsx = React.createElement(
  "section",
  { className: "app" },
  React.createElement("h1", null, title)
);
```

- Vì JSX gần với JavaScript hơn là so với HTML, React sử dụng chuẩn quy tắc đặt tên camelCase cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML.

```jsx
/* className thay cho class */
<h1 className="title">Hello World!!!<div>

/* htmlFor thay cho for */
<label htmlFor="username">Username</label>
<input type="text" id="username" />
```
