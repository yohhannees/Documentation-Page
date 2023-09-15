import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

/* const logo = (
  <svg
    height="20"
    viewBox="0 0 361 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M114.913 33.2763v28.7642h-11.57V12.9496h11.059v8.3416h.575c1.129-2.7485 2.93-4.9325 5.401-6.5518 2.493-1.6193 5.572-2.429 9.237-2.429 3.388 0 6.339.7244 8.853 2.1733 2.535 1.4489 4.496 3.5476 5.88 6.2962 1.407 2.7486 2.099 6.0831 2.078 10.0035v31.2571h-11.57V32.5732c0-3.2813-.852-5.8487-2.557-7.7024-1.683-1.8537-4.016-2.7806-6.999-2.7806-2.024 0-3.824.4475-5.401 1.3424-1.556.8736-2.781 2.1413-3.676 3.8032-.873 1.662-1.31 3.6755-1.31 6.0405Zm61.407 29.723c-4.922 0-9.172-1.0227-12.752-3.0681-3.558-2.0668-6.296-4.9858-8.214-8.7572-1.917-3.7926-2.876-8.2563-2.876-13.3913 0-5.0497.959-9.4815 2.876-13.2954 1.939-3.8353 4.645-6.8182 8.118-8.9489 3.473-2.152 7.553-3.228 12.241-3.228 3.026 0 5.881.4901 8.565 1.4702 2.706.9588 5.093 2.4503 7.159 4.4744 2.088 2.0242 3.729 4.6023 4.922 7.7344 1.193 3.1108 1.79 6.8182 1.79 11.1221v3.5476h-40.238v-7.7983h29.148c-.021-2.2159-.501-4.1868-1.438-5.9126-.938-1.7472-2.248-3.1215-3.931-4.1229-1.662-1.0014-3.601-1.5021-5.817-1.5021-2.365 0-4.443.5753-6.232 1.7258-1.79 1.1293-3.186 2.6208-4.187 4.4745-.98 1.8324-1.481 3.8459-1.502 6.0405v6.8075c0 2.8551.522 5.3054 1.566 7.3508 1.044 2.0242 2.503 3.5796 4.378 4.6662 1.875 1.0654 4.07 1.598 6.584 1.598 1.683 0 3.207-.2343 4.57-.7031 1.364-.49 2.546-1.2038 3.548-2.1413 1.001-.9375 1.758-2.0987 2.269-3.4837l10.803 1.2145c-.682 2.8551-1.982 5.348-3.9 7.4787-1.896 2.1094-4.325 3.75-7.286 4.9219-2.962 1.1506-6.35 1.7258-10.164 1.7258Zm34.777-50.0497 9.908 18.1215 10.067-18.1215h12.241l-14.798 24.5455 15.054 24.5454h-12.177l-10.387-17.674-10.291 17.674h-12.273l14.957-24.5454-14.574-24.5455h12.273Zm63.878 0v8.9489h-28.221v-8.9489h28.221ZM253.722 1.18825h11.569V47.2749c0 1.5554.235 2.7486.704 3.5795.49.8097 1.129 1.3637 1.917 1.662s1.662.4474 2.621.4474c.724 0 1.385-.0532 1.981-.1598.618-.1065 1.087-.2024 1.407-.2876l1.949 9.0447c-.618.2131-1.502.4475-2.652.7031-1.13.2557-2.515.4049-4.155.4475-2.898.0852-5.508-.3516-7.831-1.3104-2.322-.9801-4.165-2.4929-5.529-4.5383-1.342-2.0455-2.003-4.6023-1.981-7.6705V1.18825Zm29.129 60.85225V12.9496h11.218v8.1818h.512c.895-2.8338 2.429-5.0177 4.602-6.5518 2.173-1.5554 4.677-2.3331 7.511-2.3331 1.321 0 2.535.1598 3.643.4794 1.108.3196 2.088.7564 2.94 1.3104l-3.579 9.588c-.618-.2983-1.3-.5433-2.046-.7351-.745-.1917-1.587-.2876-2.524-.2876-2.003 0-3.814.4474-5.434 1.3423-1.619.8949-2.908 2.1414-3.867 3.7394-.937 1.5767-1.406 3.4091-1.406 5.4971v28.8601h-11.57Zm51.222.863c-3.856 0-7.308-.9908-10.355-2.9723-3.047-1.9816-5.454-4.858-7.223-8.6293-1.768-3.7713-2.652-8.3523-2.652-13.7429 0-5.4546.894-10.0568 2.684-13.8068 1.811-3.7713 4.251-6.6158 7.319-8.5334 3.068-1.9389 6.488-2.9084 10.259-2.9084 2.877 0 5.242.4901 7.095 1.4702 1.854.9588 3.324 2.12 4.411 3.4836 1.087 1.3424 1.928 2.6101 2.525 3.8033h.479v-8.1179h11.602v49.0909h-11.378v-7.7343h-.703c-.597 1.1931-1.46 2.4609-2.589 3.8032-1.129 1.321-2.621 2.4503-4.474 3.3878-1.854.9375-4.187 1.4063-7 1.4063Zm3.228-9.4922c2.451 0 4.539-.6605 6.265-1.9816 1.725-1.3423 3.036-3.2066 3.931-5.593s1.342-5.1669 1.342-8.3416c0-3.1747-.447-5.934-1.342-8.2777-.874-2.3438-2.174-4.1655-3.9-5.4652-1.704-1.2997-3.803-1.9496-6.296-1.9496-2.578 0-4.73.6712-6.456 2.0135s-3.025 3.196-3.899 5.5611c-.873 2.365-1.31 5.071-1.31 8.1179 0 3.0682.437 5.8061 1.31 8.2138.895 2.3863 2.205 4.272 3.931 5.6569 1.747 1.3636 3.889 2.0455 6.424 2.0455Z"
      fill="currentColor"
    />
    <path
      d="m64.8833 1.81335-2.8464 2.84638C47.1274 19.5692 22.9543 19.5692 8.04485 4.65972L5.19848 1.81335c-.93479-.93478-2.45037-.93478-3.38515 0-.93479.93478-.93478 2.45037 0 3.38515L4.6597 8.04487c14.9095 14.90953 14.9095 39.08263 0 53.99213l-2.84637 2.8463c-.93479.9348-.93479 2.4504 0 3.3852.93478.9348 2.45037.9348 3.38515 0l2.84637-2.8464c14.90955-14.9095 39.08255-14.9095 53.99205 0l2.8464 2.8464c.9348.9348 2.4504.9348 3.3852 0 .9347-.9348.9347-2.4504 0-3.3852l-2.8464-2.8463c-14.9095-14.9095-14.9095-39.0826 0-53.99213l2.8464-2.84637c.9347-.93478.9347-2.45037 0-3.38515-.9348-.93478-2.4504-.93478-3.3852 0Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    />
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg> */


const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nextra'
      }
    }
  },
  logo: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbwAAABxCAMAAACZb+YzAAAAnFBMVEX///92e31Vuk9zeHprcXNvdHfDxcWeoaJxdnh9goRTuUx1xXBfvVlFtT6Tl5nm9OXt7e3Q0dLr9urT7NKmqaqEiIpOuEdEtT3Jy8z29vbx8vJ7gIKusbKQlJW3ubrb3NzW19j3/Pdtw2jk5eWX0pTA47/I5sa03rJ/yXuh1p6V0ZK74bnn9Obd8NyKzYaq2qiMzol4xnRvw2o5sjHF/s/DAAARuUlEQVR4nO1d2WLaOhANsbyQBgcSzBYwENqkTZtu9///7dpm86ySHChNynlrY7TMkUaj0Wh0ccFgeff0/OH6shmuPzw/3S25Ys84OpafPnc6g8FVQ+4uL68Gg07n19czf38ctx8Hnea8AQafb0/dmX8Ly+fh4ADMrTEY/jzPvj+HT4PDUVfRN/h66i79M/jcOSh1JTqfz5PvT+D28rDTbo3B5bdTd+wfwMsr7EsNV52XU3ft3ePmIDbmmb1T4PZo3JW7hvOe4ai4Ph53BXuXZ6vliPh+DFtlj8HnU3fwHeNxeFTuih3Dp1N38d1iedx5V7F3VpxHwpfjkzf4eOpOvlMsj600S3TOFudR8AcmXjH1vpy6m+8Tl8fcJuzZO3U33yUeD++O5tB5PHVH3yN+WrXmYGhBx+HoffD91B19j7BqzcHztxsdL3ePT88Pg446DDqn7ug7xDerrTlw3GEvH392lPl39k8fHvYlz0Pqyyf5UPB8qn54/LAveV5btB/S5DtvFg6Pj1byrvwKvH3gSzx7pw+PzzZ75erBt8iPrCb2L+cMGz5YjU1/t+QTZwRdXdt/2F1E0348m6VxPx/Nxw26U2I8z/vpLM7nlq9GVV1lVauGNe2wGuWbsnrd15ZVNG1bXDyNFlp5dvKe/Gvn2LOR143SljFJElRIwtCYdr+nEzju1rEpp5+YqpDQBH2p56s8Mybc1WWCeLSvaQJK7U4snZ1EabIrq2h2K15ILew6MLua1puWGNNKI+lnVvI6d/YKCb5QzamTN8pMGLQwClmkPeVXkanhvvqvqUn2vzf85CsqSwJcU7JjOjUAqdrTeRrihgcmmG6HQg7LCtSyCq7ze9K0om0mG7GfW8kbNord+0WsFo28nAig1vIgF38XhbUPs7LzWQh+zf1oVAiXqykx8XqSxeDPQax0c55JZW3oyxPw/21VaJO+SbjSqlGcM0rITp5an4RbD/KiIOSbvEHY4scdQ14GOp8wtHdnRqwoMVH5iTN545inriorqRrtQ14uUbcuMKS9sZHnYmdweMKKUypookhzCzPjFx5M3gz23tC1YiRO8U1FY3fy5i1N2K1K37qTt2rrQ7gYxG28CtjIG/yU61OBfaYCeT158NYlaNjJh8jL4TAIZuQHU9tACYKVK3m5S1nO5OUOcghMH/7ISt4P8PnNC/FK3/LxKZ/Q1OPJs0pgCzNlfg3Jm6Cywgh/H9sGdymgVd+JvL5Dy00vgjWK5KX2lpVIMqCCbOTBc7hlefyDMOxcf+cO61xmnosEtoJghAjIm/XR2A3xEu/AXVlQBv/Jkxc7tTyBZUnkjduqAq63JqjvSa3kAbf0Le88GXQuKX3I8caR13cbb2uE1GaPtN8H+HuPkVIvhiXPq+V78ORNWi5Lxwb17Y+VPFDNnXQGcTUka+ML/JYhz7oCQYREjCp5ZoE+bsQdT56ztkdgyfPirujXfu5ZyEMif5Ld2MTxvIQlU/JGvhIg655KXgK/XTWUN0fevGFZPHltL+6Kju2MaBt5kJJn5Qyi84waBYsm5PHSLJ1VJgwT4mcoYZC7RSAvKH+bIMvs3lNEu8IoeeOGRfHkzVzXu12L7h3JQ6dwv7Wvh8iRBmMKCXmMNAPTSvPRYj7vRf0sZDoVwv0eS14SzNK2SZBrrM+LqPKi8iNl+wUlL5b8IEVpQaAxy5A3FbRH5dvk/5RsV3MbeTAGQg14ufoNm/VVJW9KJBCYuC7wSUS3rWjrxpFnKj9Sd3oPvmSneek07OdRFE3Te9G7QcnjlWZZWBpP+3EWGFGbU/LYwoqyWlmaplmL8/gWfRw5kQeNTUtw9RAGTEDrBpFHpbl1LdYwCrBIoeJkyBN80TNums9qhxbdvCXoYEJexsgzNP3FrrBVfi9suSl5jP5JTDraLmuTXsoNq2DsQt4A7MBFY3PzMdzQv2jkYWkG9+yhGjXv63+l5OFVcQNmfIcZrnDEqilC3oKWFYTYlFpk7FAg5OVUuZg+HMTjKR0JmwVdJ+/qEpTzVY+ZQNaNRh6WZkJdWRuJam4TQp7kDqETzzBO63HK6DBSJC0rzJgDN3Y3gckbk4+SNh3E3YxMvrXb1kLeB1CKJeAFTS6NPCSB6kiARw/3r/Y3Ql7IO7C7VEcv2A+ZnScmj5ZF958VmBlKyCMLP+OJKEF8Q+tW6eShGAhbwAu8kKCseXjFC5QTc7S5rosdkxf0+SKIjATuONsPk0cUXShUyulqRN4Yl5VIXnDi0THlMLWQB2MgbNHVMNDsk2xtImmKsqyQQkdxbWxi8gRr5QIrOkNc1kJlDHnYXEnkk3bqhUDkkcEnKyCsrKvTPZ08GANhu8mHAsR+yOTdwzbrkQbotKDmbyad5wsg81yrD09SRB7VmkpZZHOJyCMDQY6XIY6BcitkIQ8E3L5YoqvRZZLvInlImsYS4wNlEO4NSkQec4BXAWs6ctxQB54uiLyR42RfAxMNycMDIZQiBkr0mIot5IHff7IE6CIley26x+ARZcId1cmdrC1siDwu7KEEUjnSZxug6YDIQ5NJGi98AxF5aCAoSpNpVyk1lTxkPtpC44dgni7lIyG4sIRRzwKoZfcSQLKRRi5eLvSJjkUKyUMi1CfexRjpTUhejMrSAuWI2V1SrZKHYiC+W5zYcF/xKB8JwR61Qhvg52an9RB5hg+eRdrJssJirhF5SNPp4WCEH/h5G4nBUhYVg04edJlY8iShCM/v4szD8Qqe2I92TB4/pdCGS11ZqMAheajpVo2PVipAHtqhS/ucHVCkQDFUVfLQXWTdXkF+aZzdpUZe4+MwLH1MHt/pCOqu0Ba2DL+H5CFTK9Q1HSEbkOdbFhoIxfc6eTf1H3/TyfsPXgVTApCw4eSJvcHhRh7aVCb8V5JQIXlo3DHBhQjKzFt4loXILsSgkgcDbvV7mEN0efJBDkCKfI8fIfb6BRtzfKeRGtRtugITUCokD407zTO0BjRwAHnYVrYVhdbbYKqS5x4DUUxSdHfyDm/oa4XlryRvZ3G4kZcqaxgLRW1ipWEtayaTh8RwLxWxA3JtxCp5aNOt5Y0Y4nuv5My9Rh49h/WCRJ40pxB5NrsAmZuQPDRc7AKPXcmzawRkndrIg4xgRVgjButMRsUekLxdN5uQZzUQVfK8Z14qkzf1JS/DDVPJQzEQEnWd3ze4HrqrOCB5O69Go5lnV5vu5NnXPE1tOrW+Bq+Z5xZwO7y2BtwemDxPtYkMFt2hdYHdIrq1abt5eSE5hy7o0m8rCvk2Cv2vkgdjIP6joe6DwcMXJtMHsVYuNYMl8EToOfPQ5ta6TnWVrQLemy1shSn7POSHM7ZZPCYOAoU8ZGwubxmwtSy5dB610kZI5qkfZp5bBTRW1DOFEguFPCRA5s4cxEohD+/zbDfj0axPIpW8X5bSJLCWTd3DEqJGNIUbeXiE675kYgVqvk3rQqVd8cKz2CYH7ClaaOQ1TU/LpxuvkYf0ks1RrHTHiTw8Ym2zhRh1daDjJZtbJNMc054Oc1q1Rl6zhFM/eUdMXQl7+qtEuJE3QV9ZTgLwIQQkD/va9I0HPsOHVePjJb1dONIsUI+EGuWBkLgD5MExZDnHUuBGHrL4LBEzxJyC5OGYMN3MwBExkDx0sGvRmygeoJyoGnlN8kJ/ltwwdfLQ9tRqvEtwJA8dqlnqQwY8Io+Mf03ZkeMTSB6OalTtYBzEUlKtqU21jyxur0UXWp08vFuymRASHMkj4R/aiR7ehOJNPQ7j0gprYUDy8Dm7arviYKZytZXJa5As7JOSbxNsPJxDbnU4kkfikhNZ15E7FJg8HIHUCsWhR8II8XKLP1B2C3gSV+pDJs87D8RSfT0RkIf2zSTU3xGO5BEhyYpzjNZHSh6eLrLImSvwiDysNwNRcU5IaHU54RXyPJOOPenvzaoR00oU7MW4nUoD0pU8EnkuRibTG0DEF0pv+vGac8YcOWNDl1Qm6KAxuUxUhajK5PkZm1+vLUGd0F+DhSSzt2oFgZnxqsmVPGxvSvcLxvRGByWPht1yt9Pm7EVzTB65bJFknEZfEe7Wy6NCHjkqEHH749L6AB8kj1wfwflhtlgnlwlMxu0nnMmjd8G4mz2swOkpBHPJNginoLg5d9+IIY8E4hcjlXY0one81rHhMnmuScdenh6GDm+WIk8p0U9Ja0HLXuwuxwZcBjJn8ujUK8bDFA7yLp9ahZJH72WVzTftaW81KbAa9YXUdAx5TFIFM4OrxCJjLheuFZVIHhL2tzsGj08ffw20lO5yeUwEmclGQJyTqA2EELZw5jt38shMb8HbrJNRKgicOf/jk4JUqRBKKOnNqHOHvbLbzueTsmXj7mLaYtq1XRpF8vDFAyb3kcNbGCJ5vPJJZnlvVSYVXY2mGc3jGCZTsLi4k8feRS4rbM/iOM3uZYlzh7eMxN1AyWNW0PU4aLXb94Hhr8pv7VuZPNcYiIbk8bk1ylSxZZLbMtcr22z1TrpCnhjoq2RdWP+dIY9uFxzBuFW9s9HUbvWK5KGA21e/FkXIY8ecBWhD6EFeEyFVYMMmmoYNcz5x70xY+xuBMnkOMRCvIo9dh1yb7U+emD3FAj7mpeFQYA80PLPoBPtCxJvKHZ88EC7kUW+bbzawBG9hvcjjlz27rPj9vGPb1VOFXcN82Atae6tNSkjlE3DrRh5zLu/HHuHOk7yxb5KvtbAEZ4xT2xPkmBOOEj3YC1o1k026c4dkrSUdcwN7Lu+jfULqkPQj72Likn8saDnl23TJ0RuEq8gtNpNzpbGAHphHgRUk61+vNlh4V+lKS/sFwLlgPMlzSUoaBF23TLeFxWUpLWl3nWMzHXOBooyxN8JihmIgXv82qfAYGJu4hpFp8ir32A622sJiZLun5mdyE+1/VyWYdD52HjnlmMZOJmHm+eWBcIDobaMJxphWp2x0qz95nJ+wXk+5g/J4V2El+mU2Ti7XWay/GSAKQbir7JcHwg4ljnA8VR8UKL3SwnlnA/JKIUn0mXU6Mg/yCvpi6pwJQjNbrP8MfTF6uFJPSF23EQJJzH8h37oDH9nyQNihvn85noqu3CCRzoMuqmlUhxN5laeXOz0w9xulFCf1QsWjv13jR2mwe/ynyt+Z5bsjBugQt4WoImdu7YcmW3A/wNePNxMF7spe/5Y63DZS9NKEPvCThKYmCIpROwPQq9hjHifQ/VbOld2i2geltu1XwqpXvOLZrPg67eeLmnJDfjTrzeWiZQEWQ9G29lQ6jmazwQ1gzmExJswVLjEV87x8x6tMUlx5N00wm/asFzkaYrzoZ/uqWnF0nIpwtiCXt94KMSTrllVSaMeR8qtbzhhR8+E0wND1ZLc7X5SZVxbzVdPn89zRnRc1jRZHrAlfk3D93Xg1X0vBeuedu/GKYiBea2z+q6+ko4vITaPkFCwZkwU+vCZtBp0xbBK/+/aBgpwdLuX6g7y45ZcHwo7OD6HmN4d5GkNofJAYucUxmvQBK07PpGMWvKO3fsdwcxKQh7Vq6JIEp0dp0vIKGSRq8kVv7vxeWv+7EZPQDOFtv4seydzZ/C6bihdkkfglHbMAP5bxpkGfFCBhaBW61Iva/DaUBY+QPRQD8aqJN+TeZ3u7YIKPEhPDZ6W7EevEOVqbIHsHjIEYan6xNwj+bRRjsngaRaNRlPdn/Dsk1vvrr8DLsKYbh4eKgbhqdkPzb4b8KlEShmESirFox2zU7cNOOx4sBmJw/Y5slS0Ebiw42oq3wZft5PN4eE2ddsOGKQn+bjSK+1My+B8INx/W9KGAW+tb6gJ1v/nD8zePBu9WyjfvDoi7D+WlEZ+H1wTmBsPf726128H79dkgONbxCMTNl+vhf/DhNU975WowGF5/dL8g9gbhyR58Y/m4uHmyJh0TMRwOHn4+vWvmSnhpzuT+z8w7Dkv8rr0G4cn7d4eFc8xiyxzdVjnDE2MpcAxPO2tOsTNOAD6QCSJgrquf8VegoE996DkxsTWO4YyToZu3De8QK19vxtewz/jb0B31s7AM99qGbibl5fR2PDpPujeC7nyU5/1+GRcxzaNjBqTV8D9FqEtwBHtKogAAAABJRU5ErkJggg==" width={150} height={150}/>,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta
          name="og:description"
          content="Make beautiful websites with Next.js & MDX."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Nextra' : 'Nextra'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="https://vercel.com?utm_source=nextra.site"
          >
            <span>Powered by</span>
            <svg height={20} viewBox="0 0 283 64" fill="none">
              <title>Vercel</title>
              <path
                fill="currentColor"
                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              />
            </svg>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The Nextra Project.
        </p>
      </div>
    )
  },
 /*  toc: {
    backToTop: true
  } */
}

export default config