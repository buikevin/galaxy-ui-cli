# Galaxy UI CLI - Components Documentation

> **Bilingual Documentation** | **Tài Liệu Song Ngữ**

This document provides a comprehensive overview of all 43 components in Galaxy UI CLI.

Tài liệu này cung cấp tổng quan toàn diện về tất cả 43 components trong Galaxy UI CLI.

---

## 📦 Component Groups | Nhóm Components

### 1. Form Components (12) | Components Biểu Mẫu

#### ✅ Radio (`g-radio`)
**EN**: Radio button group with single selection
**VN**: Nhóm nút radio với lựa chọn đơn

**Features | Tính năng**:
- Single/multiple selection | Chọn đơn/đa
- Card-style layout | Giao diện dạng thẻ
- 6 status colors, 5 sizes | 6 màu trạng thái, 5 kích thước
- ControlValueAccessor support | Hỗ trợ ControlValueAccessor

**Installation | Cài đặt**:
```bash
galaxy-ui add radio
```

**Usage | Sử dụng**:
```typescript
<g-radio
  [(ngModel)]="selectedValue"
  [options]="radioOptions"
  status="primary"
  size="medium">
</g-radio>
```

---

#### ✅ Avatar (`g-avatar`)
**EN**: Avatar component for user profile pictures
**VN**: Component hiển thị ảnh đại diện người dùng

**Features**:
- Image/text/icon modes | Chế độ ảnh/chữ/icon
- 4 sizes, 2 shapes | 4 kích thước, 2 hình dạng
- Avatar group support | Hỗ trợ nhóm avatar
- Auto initials from text | Tự động lấy chữ cái đầu

**Installation**:
```bash
galaxy-ui add avatar
```

**Usage**:
```typescript
<!-- Image avatar -->
<g-avatar src="/user.jpg" alt="User"></g-avatar>

<!-- Text avatar -->
<g-avatar text="John Doe"></g-avatar>

<!-- Icon avatar -->
<g-avatar [icon]="UserIcon"></g-avatar>

<!-- Avatar Group -->
<g-avatar-group [maxCount]="3" [totalCount]="10">
  <g-avatar src="/user1.jpg"></g-avatar>
  <g-avatar src="/user2.jpg"></g-avatar>
  <g-avatar src="/user3.jpg"></g-avatar>
</g-avatar-group>
```

---

#### ✅ Badge (`g-badge`)
**EN**: Badge component for counts and status indicators
**VN**: Component huy hiệu cho số đếm và chỉ thị trạng thái

**Features**:
- Dot, count, text, status modes | Chế độ chấm, số, chữ, trạng thái
- 6 status types | 6 loại trạng thái
- Processing animation | Hiệu ứng xử lý
- Ribbon variant | Biến thể ruy băng

**Installation**:
```bash
galaxy-ui add badge
```

**Usage**:
```typescript
<!-- Count badge -->
<g-badge [count]="5">
  <button>Messages</button>
</g-badge>

<!-- Dot badge -->
<g-badge [dot]="true">
  <button>Notifications</button>
</g-badge>

<!-- Status badge -->
<g-badge status="success" text="Online"></g-badge>

<!-- Ribbon badge -->
<g-badge-ribbon text="Hot">
  <div>Product Card</div>
</g-badge-ribbon>
```

---

### 2. Data Display Components (7) | Components Hiển Thị Dữ Liệu

#### ✅ Table (`g-table`)
**EN**: Data table with sorting, filtering, and selection
**VN**: Bảng dữ liệu với sắp xếp, lọc và chọn

**Features**:
- Column sorting | Sắp xếp cột
- Row selection | Chọn hàng
- Expandable rows | Hàng mở rộng
- Custom cell rendering | Render cell tùy chỉnh
- 3 sizes, bordered, striped | 3 kích thước, viền, sọc

**Installation**:
```bash
galaxy-ui add table
```

**Usage**:
```typescript
const columns: TableColumn[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'age', title: 'Age', sortable: true, align: 'center' },
  { key: 'email', title: 'Email' }
];

<g-table
  [columns]="columns"
  [dataSource]="data"
  [selectable]="true"
  [bordered]="true"
  [striped]="true"
  (rowClick)="handleRowClick($event)"
  (selectionChange)="handleSelection($event)">
</g-table>
```

---

#### ✅ Pagination (`g-pagination`)
**EN**: Pagination controls for data navigation
**VN**: Điều khiển phân trang cho điều hướng dữ liệu

**Features**:
- Page size selector | Chọn kích thước trang
- Quick jumper | Nhảy nhanh
- First/last buttons | Nút đầu/cuối
- Show total items | Hiển thị tổng

**Installation**:
```bash
galaxy-ui add pagination
```

**Usage**:
```typescript
<g-pagination
  [total]="totalItems"
  [pageSize]="pageSize"
  [currentPage]="currentPage"
  [showSizeChanger]="true"
  [showQuickJumper]="true"
  [showFirstLast]="true"
  (pageChange)="handlePageChange($event)"
  (pageSizeChange)="handlePageSizeChange($event)">
</g-pagination>
```

---

#### ✅ Tour (`g-tour`)
**EN**: Guided tour component for user onboarding (Ant Design style)
**VN**: Component hướng dẫn tour cho người dùng mới (phong cách Ant Design)

**Features**:
- Spotlight on target element | Làm nổi bật phần tử mục tiêu
- Step-by-step navigation | Điều hướng từng bước
- Cover images | Ảnh bìa
- Mask overlay | Lớp phủ mờ
- Multiple placements | Nhiều vị trí

**Installation**:
```bash
galaxy-ui add tour
```

**Usage**:
```typescript
const steps: TourStep[] = [
  {
    target: '#step1',
    title: 'Welcome!',
    description: 'This is the first step',
    placement: 'bottom'
  },
  {
    target: '#step2',
    title: 'Feature Tour',
    description: 'Learn about this feature',
    cover: '/image.jpg'
  }
];

<g-tour
  [open]="tourOpen"
  [steps]="steps"
  [current]="currentStep"
  (finish)="handleFinish()"
  (close)="handleClose()">
</g-tour>
```

---

#### ✅ Carousel (`g-carousel`)
**EN**: Carousel component for image and content slides (Ant Design style)
**VN**: Component băng chuyền cho ảnh và nội dung (phong cách Ant Design)

**Features**:
- Autoplay with custom speed | Tự động phát
- Scroll/fade effects | Hiệu ứng cuộn/mờ dần
- Dots indicator | Chỉ thị chấm
- Navigation arrows | Mũi tên điều hướng
- Infinite loop | Vòng lặp vô hạn

**Installation**:
```bash
galaxy-ui add carousel
```

**Usage**:
```typescript
<g-carousel
  [autoplay]="true"
  [autoplaySpeed]="3000"
  [arrows]="true"
  [dots]="true"
  [infinite]="true"
  effect="scroll">
  <g-carousel-item>
    <img src="/slide1.jpg" alt="Slide 1">
  </g-carousel-item>
  <g-carousel-item>
    <img src="/slide2.jpg" alt="Slide 2">
  </g-carousel-item>
</g-carousel>
```

---

### 3. Modal & Overlay Components (9) | Components Modal & Lớp Phủ

#### ✅ Toast (`g-toast`)
**EN**: Toast notification component with service (Ant Design alert style)
**VN**: Component thông báo toast với service (phong cách alert của Ant Design)

**Features**:
- Global service | Service toàn cục
- 4 types (success/error/warning/info) | 4 loại
- Auto dismiss | Tự động đóng
- 6 placement options | 6 vị trí
- Closable | Có thể đóng

**Installation**:
```bash
galaxy-ui add toast
```

**Usage**:
```typescript
// In app.component.ts template
<g-toast></g-toast>

// In any component
constructor(private toastService: ToastService) {}

showToast() {
  this.toastService.success('Operation successful!', 'Success', 3000);
  this.toastService.error('Something went wrong', 'Error');
  this.toastService.warning('Please be careful', 'Warning');
  this.toastService.info('For your information', 'Info');
}
```

---

#### ✅ Progress (`g-progress`)
**EN**: Progress bar and circle component (Ant Design style)
**VN**: Component thanh tiến trình và vòng tròn (phong cách Ant Design)

**Features**:
- 3 types (line/circle/dashboard) | 3 loại
- 4 statuses | 4 trạng thái
- Steps support | Hỗ trợ bước
- Active animation | Hoạt ảnh đang hoạt động
- SVG circle | Vòng tròn SVG

**Installation**:
```bash
galaxy-ui add progress
```

**Usage**:
```typescript
<!-- Line progress -->
<g-progress
  [percent]="75"
  type="line"
  status="active"
  [showInfo]="true">
</g-progress>

<!-- Circle progress -->
<g-progress
  [percent]="80"
  type="circle"
  status="success"
  [width]="120">
</g-progress>

<!-- Dashboard progress -->
<g-progress
  [percent]="60"
  type="dashboard"
  [width]="150">
</g-progress>

<!-- Steps progress -->
<g-progress
  [percent]="60"
  type="line"
  [steps]="5">
</g-progress>
```

---

## 📚 Complete Component List | Danh Sách Đầy Đủ

### Form (12)
1. Button - Nút bấm
2. Input - Nhập liệu
3. Checkbox - Hộp kiểm
4. Select - Chọn lựa
5. Calendar - Lịch
6. Radio - Nút radio
7. Switch - Công tắc
8. Slider - Thanh trượt
9. Rate - Đánh giá sao
10. Button Group - Nhóm nút
11. Autocomplete - Tự động hoàn thành
12. Calendar Range - Chọn khoảng ngày

### Layout (5)
1. Card - Thẻ
2. Accordion - Bảng mở rộng
3. Grid - Lưới
4. Divider - Dấu phân cách
5. Splitter - Bộ chia

### Navigation (6)
1. Menu - Trình đơn
2. Breadcrumb - Đường dẫn
3. Tabs - Tab
4. Dropdown - Danh sách thả xuống
5. Sidebar - Thanh bên
6. Stepper - Bước tiến trình

### Data Display (7)
1. Table - Bảng
2. Pagination - Phân trang
3. Table Paginated - Bảng có phân trang
4. List - Danh sách
5. Tree - Cây
6. Tag - Nhãn
7. Timeline - Dòng thời gian

### Modal & Overlay (9)
1. Popover - Hộp bật lên
2. Drawer - Ngăn kéo
3. Toast - Thông báo
4. Tooltip - Chú thích
5. Progress - Tiến trình
6. Skeleton - Khung xương
7. Popconfirm - Xác nhận
8. Dialog - Hộp thoại
9. Spinner - Vòng xoay

### Other (4)
1. Avatar - Ảnh đại diện
2. Badge - Huy hiệu
3. Tour - Hướng dẫn
4. Carousel - Băng chuyền

---

## 🎨 Common Features | Tính Năng Chung

All components support | Tất cả components đều hỗ trợ:

- ✅ **Dark Mode** - Chế độ tối
- ✅ **TypeScript** - Kiểu dữ liệu TypeScript
- ✅ **Angular Signals** - Tín hiệu Angular
- ✅ **Tailwind CSS** - CSS Tailwind
- ✅ **Accessibility** - Khả năng tiếp cận
- ✅ **Responsive** - Đáp ứng

---

## 📖 Resources | Tài Nguyên

- **GitHub**: https://github.com/your-repo/galaxy-ui-cli
- **Documentation Site**: Coming Soon | Sắp Ra Mắt
- **npm**: Coming Soon | Sắp Ra Mắt

---

## 💡 Quick Tips | Mẹo Nhanh

**EN**:
- Use `galaxy-ui add --all` to install all components at once
- Components are copied to your project for full customization
- All components work with Angular 20+ and standalone components
- Dark mode is automatic based on Tailwind's dark mode configuration

**VN**:
- Dùng `galaxy-ui add --all` để cài tất cả components cùng lúc
- Components được copy vào project để tùy chỉnh hoàn toàn
- Tất cả components hoạt động với Angular 20+ và standalone components
- Dark mode tự động dựa trên cấu hình dark mode của Tailwind

---

**Last Updated**: October 2025
**Version**: 1.0.0
**Total Components**: 43
