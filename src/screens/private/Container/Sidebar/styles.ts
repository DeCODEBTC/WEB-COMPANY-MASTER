import styled from "styled-components";

export const Container = styled.div`
  /* ===== Sidebar ===== */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 15%;
    display: flex;
    flex-direction: column;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-05);
    z-index: 100;
  }
  .menu {
    box-shadow: none;
    padding: 0;
  }
  ul {
    margin: 0;
  }

  .sidebar.close {
    width: 5%;
  }

  /* ===== Reusable code - Here ===== */
  .sidebar li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .sidebar header .image img {
    min-height: 60px;
  }
  .sidebar header .image,
  .sidebar span {
    border-radius: 6px;
  }

  .sidebar span {
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  .sidebar .text,
  .sidebar span {
    color: var(--text-color);
    transition: var(--tran-03);
  }

  .sidebar .text {
    font-size: 0.8rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
  }
  .sidebar.close .text {
    opacity: 0;
  }
  /* =========================== */

  .sidebar header {
    position: relative;
  }

  .sidebar header .logo-text span {
    font-size: 0.75rem;
  }
  .sidebar header .logo-text {
    display: flex;
    flex-direction: column;
  }
  .sidebar header .image-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  header .image-text .card-image {
    width: 100px;
    height: 100px;

    img {
      border-radius: 50%;
    }
  }
  header .image-text .name {
    margin-top: 2px;
    font-size: 1rem;
    font-weight: 600;
  }

  header .image-text .profession {
    font-size: 1rem;
    margin-top: -2px;
    display: block;
  }

  .sidebar header .image img {
    border-radius: 6px;
  }

  .sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: var(--primary-color);
    color: var(--sidebar-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-05);
  }

  body.dark .sidebar header .toggle {
    color: var(--text-color);
  }

  .nav-link a {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    p {
      margin: 0;
      padding-left: 1rem;
    }
  }

  .sidebar.close .toggle {
    transform: translateY(-50%) rotate(0deg);
  }

  .sidebar li.search-box {
    border-radius: 6px;
    background-color: var(--primary-color-light);
    cursor: pointer;
    transition: var(--tran-05);
  }

  .sidebar li.search-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: var(--primary-color-light);
    color: var(--text-color);
    border-radius: 6px;
    font-size: 17px;
    font-weight: 500;
    transition: var(--tran-05);
  }
  .sidebar li a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
  }

  .sidebar li a:hover {
    background-color: var(--primary-color);
  }
  .sidebar li a:hover span,
  .sidebar li a:hover .text {
    color: var(--sidebar-color);
  }
  body.dark .sidebar li a:hover span,
  body.dark .sidebar li a:hover .text {
    color: var(--text-color);
  }

  .sidebar .menu-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    margin-top: 1rem;
    border-top: 1px solid #eee;
    flex: 1;
  }

  .menu-bar::-webkit-scrollbar {
    display: none;
  }
  .sidebar .menu-bar .mode {
    border-radius: 6px;
    background-color: var(--primary-color-light);
    position: relative;
    transition: var(--tran-05);
  }

  .menu-bar .mode .sun-moon {
    height: 50px;
    width: 60px;
  }

  .mode .sun-moon i {
    position: absolute;
  }
  .mode .sun-moon i.sun {
    opacity: 0;
  }
  body.dark .mode .sun-moon i.sun {
    opacity: 1;
  }
  body.dark .mode .sun-moon i.moon {
    opacity: 0;
  }

  .menu-bar .bottom-content .toggle-switch {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
  }
  .toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: var(--toggle-color);
    transition: var(--tran-05);
  }

  .switch::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: var(--sidebar-color);
    transition: var(--tran-04);
  }
`;
