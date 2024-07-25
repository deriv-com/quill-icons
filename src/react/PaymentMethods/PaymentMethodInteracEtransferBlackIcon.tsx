import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodInteracEtransferBlackIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#000'>
      <path d='M26.42 34.434c-.765.173-1.166.919-1.172 2.163l2.312-.554v-.374c-.01-.925-.3-1.427-1.14-1.235M40.15 34.236s-.449.335-1.155.677c-.717.355-1.043.785-1.043 1.456 0 .583.352.964 1.01.801.7-.172 1.189-.83 1.189-1.739-.008-.39-.004-.78-.002-1.017l.001-.088v-.09M47.866 23.912c.306 0 .479-.183.479-.489 0-.316-.134-.488-.45-.488h-.403v.967h.374z' />
      <path
        fillRule='evenodd'
        d='M47.896 21.892a2.15 2.15 0 0 0-2.144 2.143 2.143 2.143 0 1 0 2.143-2.143m-.89.678h1.052c.42 0 .756.212.756.765 0 .391-.173.69-.498.736.293.033.45.192.469.612l.01.302v.001c.002.106.004.21.01.3.009.143.074.221.142.26h-.537c-.045-.058-.065-.146-.075-.27a3 3 0 0 1-.014-.324 7 7 0 0 0-.005-.24c-.01-.325-.105-.468-.44-.468h-.39v1.303h-.48z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M51.804 59.915a3.99 3.99 0 0 1-3.987 3.987H7.987A3.99 3.99 0 0 1 4 59.915v-39.83a3.986 3.986 0 0 1 3.986-3.987h39.84a3.99 3.99 0 0 1 3.987 3.987v39.83zm-40.72-16.97c-.668-.066-1.127.152-1.127.152v-6.165l2.257-.537v.967s.612-1.348 2.227-1.73c1.789-.422 2.362.62 2.362 2.111v6.14l-2.371.553v-5.8c0-.906-.424-1.088-.938-.974-.678.153-1.147.909-1.147 1.863v3.99q-.006.003-.062-.044a2.2 2.2 0 0 0-1.201-.523zm19.603-2.332v-8.556l2.234-.537v1.13s.586-1.472 1.921-1.818c.414-.104.622-.039.622-.039v2.182s-.505-.02-1.172.248c-.824.326-1.244 1.032-1.244 2.123v4.723zm-11.77 2.78s-.365-.543-.365-2.465v-4.266l-1.147.27v-1.748l1.147-.277v-1.915l2.38-.564v1.912l1.684-.4v1.748l-1.684.391v4.341c0 1.98.528 2.355.528 2.355zm3.94-5.093c0-1.52.222-2.631.68-3.481.555-1.013 1.463-1.674 2.782-1.97 2.6-.593 3.537.947 3.508 3.022l-.01 1.1-4.589 1.079v.078c0 1.442.306 2.13 1.215 1.94.794-.172 1.013-.66 1.081-1.282.01-.095.02-.352.02-.352l2.15-.518s.009.173 0 .375c-.02.82-.261 2.859-3.251 3.566-2.83.667-3.586-1.062-3.586-3.557m20.648-5.002c-.084-2.609.587-4.674 3.492-5.335 1.856-.42 2.563.059 2.914.528.346.44.48 1.042.48 1.882v.153l-2.277.534v-.316c0-.993-.277-1.374-1.003-1.192-.86.219-1.205 1.033-1.205 2.658v.765c0 1.652.228 2.41 1.214 2.199.86-.183.977-.938.984-1.596l.01-.443 2.276-.534v.355c-.01 2.16-1.146 3.527-3.28 4.025-2.934.684-3.517-1.02-3.605-3.683m-7.868 3.654c0-1.987 1.156-2.612 2.908-3.338 1.567-.652 1.606-.977 1.616-1.537.01-.48-.212-.88-.997-.681-.717.182-.905.697-.945 1.12-.019.218-.01.44-.01.44l-2.207.524s-.033-.677.153-1.31c.351-1.185 1.403-1.98 3.201-2.4 2.345-.543 3.127.49 3.136 2.085v3.798c0 1.823.346 2.1.346 2.1l-2.173.508s-.198-.423-.286-.775c0 0-.476 1.195-2.11 1.58-1.724.4-2.632-.658-2.632-2.114m-22.554 9.712 3.795 2.582c.527.355.87.945.87 1.629v11.259h-4.3a4.11 4.11 0 0 1-4.113-4.11V45.192a1.433 1.433 0 0 1 1.482-1.482 1.446 1.446 0 0 1 1.472 1.482l.01 7.36c0 .221.133.404.403.404.267-.01.401-.192.401-.45-.02-.276-.02-5.842-.02-5.842m-7.67.775a1.303 1.303 0 0 0 1.359 1.977c.142-.022.742-.162 1.378-.311l.413-.096v-2.313zm0 3.166A1.31 1.31 0 0 0 6.773 52.6a66 66 0 0 0 1.791-.42v-2.312zm0 3.175a1.302 1.302 0 0 0 1.359 1.986l.129-.029c.31-.069 1.015-.227 1.662-.38v-2.323zm.632-7.354v-13.73l2.505-.593v13.73zm41.85-19.941c-1.348 0-2.449-1.101-2.449-2.45 0-1.348 1.101-2.449 2.45-2.449 1.348 0 2.436 1.101 2.436 2.45a2.44 2.44 0 0 1-1.502 2.259c-.296.123-.614.19-.934.19'
        clipRule='evenodd'
      />
      <path d='M61.783 37.437q.127.301.163.625.051.424.065.85h-2.205v-.326q0-.298.055-.592.049-.284.18-.541c.077-.156.193-.29.335-.39a.93.93 0 0 1 .54-.147c.19-.006.376.039.541.13a.93.93 0 0 1 .326.39M85.522 40.29q.232-.057.453-.15.255-.102.468-.274v1.658a1.225 1.225 0 0 1-.872 1.228 1.6 1.6 0 0 1-.456.068q-.436 0-.622-.342a1.7 1.7 0 0 1-.19-.83c-.016-.32.083-.637.28-.89.255-.252.584-.416.939-.468M113.231 37.437q.126.301.163.625.05.424.061.85h-2.201v-.326a3 3 0 0 1 .055-.592 2 2 0 0 1 .179-.541c.077-.157.193-.29.336-.39a.9.9 0 0 1 .537-.147q.329.001.541.13a.9.9 0 0 1 .329.39' />
      <path
        fillRule='evenodd'
        d='M50.175 16.128c1.895.31 3.1 1.95 3.1 3.927v39.831h-.01c0 2.202-.977 3.99-3.175 3.99h69.468A4.444 4.444 0 0 0 124 59.43V20.57a4.44 4.44 0 0 0-4.442-4.442zm9.686 25.468a5 5 0 0 1-.055-.727v-.674h4.266v-.482q0-.972-.127-1.758a3.6 3.6 0 0 0-.469-1.346 2.3 2.3 0 0 0-.944-.86c-.397-.201-.912-.302-1.537-.302q-1.095 0-1.75.358c-.42.223-.77.559-1.009.97q-.35.606-.469 1.388a11 11 0 0 0-.117 1.625q0 .8.072 1.596c.036.498.166.985.38 1.436.214.433.552.793.971 1.033q.655.39 1.827.39c1.033 0 1.785-.257 2.264-.765q.723-.767.781-2.234h-1.934c-.03.415-.147.82-.346 1.185q-.25.391-.797.391a.8.8 0 0 1-.502-.163 1.3 1.3 0 0 1-.326-.44 2.4 2.4 0 0 1-.179-.621m5.304-1.117h4.403v-1.843h-4.403zm12.402-5.719h-2.436v9.311h-2.25v-9.31h-2.436v-1.844h7.122zm1.816 2.029v-1.124H77.32v8.406h2.156v-5.048c-.008-.244.04-.487.14-.71a1.3 1.3 0 0 1 .375-.466c.152-.12.327-.209.514-.26a2 2 0 0 1 .564-.079l.335.007.336.026v-2.065l-.196-.023q-.097-.008-.195-.006a1.8 1.8 0 0 0-1.14.365c-.329.268-.6.6-.795.977zm3.357.026a2.8 2.8 0 0 0-.234 1.224v.206h1.938v-.235a1.2 1.2 0 0 1 .25-.801q.25-.293.75-.293.547 0 .772.273c.163.217.244.485.227.756q0 .423-.185.641c-.186.18-.42.3-.674.346l-1.218.329q-.562.151-.961.358a1.97 1.97 0 0 0-1.04 1.24 3.7 3.7 0 0 0-.123 1.023q0 .434.108.854c.07.275.186.536.345.772.157.231.373.418.625.54.299.139.625.206.954.195q.783 0 1.27-.195a1.8 1.8 0 0 0 .867-.853h.032l.01.044q.044.2.095.402a1.6 1.6 0 0 0 .162.43h2.062a3.2 3.2 0 0 1-.212-.704 6 6 0 0 1-.055-.921v-4.42q0-.565-.117-1.042a1.8 1.8 0 0 0-.443-.817 2.14 2.14 0 0 0-.922-.535c-.397-.12-.918-.185-1.563-.185a4.7 4.7 0 0 0-1.15.133 2.5 2.5 0 0 0-.934.437c-.274.21-.492.484-.636.798m9.357-.166v-.984h-2.061v8.41h2.159v-5.58q-.001-1.389 1.14-1.39.484.001.7.26.221.257.222.912v5.797h2.152v-6.24q.002-1.262-.553-1.824c-.368-.374-.896-.566-1.586-.566a2.6 2.6 0 0 0-1.248.293 2.17 2.17 0 0 0-.892.912zm7.621 5.836q-.293-.336-.293-.886l.003.003v-.28h-1.937v.296c-.005.372.042.743.14 1.101.087.318.256.607.491.837.27.249.599.426.955.515q.6.172 1.508.172.684.002 1.257-.143c.357-.081.691-.24.98-.465.278-.22.5-.501.651-.821a2.7 2.7 0 0 0 .235-1.166q.001-.952-.424-1.508-.42-.553-1.436-.896l-1.296-.436q-.547-.177-.743-.423a.9.9 0 0 1-.195-.564q0-.453.306-.677c.205-.154.455-.234.71-.228.352 0 .603.1.743.303q.21.307.211.96h1.935v-.342q0-1.141-.704-1.765c-.465-.417-1.192-.625-2.169-.625q-.828 0-1.413.202a2.7 2.7 0 0 0-.96.547c-.246.22-.434.495-.548.804-.117.31-.176.632-.176.977a2.28 2.28 0 0 0 .456 1.463c.356.415.823.72 1.345.882l1.515.547c.201.077.386.19.547.333q.233.214.231.618 0 .505-.293.75c-.227.177-.51.266-.798.25q-.549.001-.834-.335m4.442-6.82v1.469h1.095v6.937h2.156v-6.937h1.247v-1.469h-1.247v-.733q0-.36.185-.518.189-.156.642-.156h.202q.11-.002.218.016v-1.53a14 14 0 0 0-1.156-.046 4 4 0 0 0-.935.101 1.5 1.5 0 0 0-1.156.96q-.156.39-.156.952v.954zm7.149 5.93a4.5 4.5 0 0 1-.055-.726l-.003-.674h4.266v-.482q.002-.972-.124-1.758c-.084-.528-.241-.974-.469-1.346a2.3 2.3 0 0 0-.944-.86q-.602-.302-1.541-.302-1.094 0-1.745.358a2.54 2.54 0 0 0-1.01.97 3.9 3.9 0 0 0-.469 1.388 11 11 0 0 0-.117 1.625q0 .8.068 1.596c.04.498.17.985.385 1.436.213.432.549.792.967 1.033q.658.39 1.83.39 1.544-.001 2.264-.765.718-.767.781-2.234h-1.938a2.9 2.9 0 0 1-.342 1.185q-.25.391-.797.391a.8.8 0 0 1-.502-.163 1.2 1.2 0 0 1-.326-.44 2.3 2.3 0 0 1-.179-.621m7.396-4.806v-1.124h-2.061v8.406h2.156v-5.048c-.008-.244.04-.487.14-.71a1.3 1.3 0 0 1 .374-.466c.153-.12.328-.209.515-.26q.276-.078.563-.079l.336.007.335.026v-2.065l-.195-.023q-.097-.008-.195-.006a1.8 1.8 0 0 0-1.14.365c-.329.268-.6.6-.795.977z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodInteracEtransferBlackIcon);
export default ForwardRef;