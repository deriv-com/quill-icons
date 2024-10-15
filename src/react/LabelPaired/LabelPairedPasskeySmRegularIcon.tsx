import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeySmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.168 11.188q.615-.083 1.23-.083c.22 0 .438 0 .63.028.218 0 .41.027.628.055h.028q-.083.942.328 1.804c.3.547.71 1.012 1.23 1.34v1.832H3.23v-2.16c0-.41.11-.793.356-1.149a2.1 2.1 0 0 1 .875-.82c.629-.3 1.258-.547 1.941-.683.246-.082.52-.137.766-.165M4.324 13.32l4.485-1.34h-.41c-.602 0-1.204.055-1.805.22a8.4 8.4 0 0 0-1.75.628c-.219.11-.383.274-.52.492m4.485-1.34-4.485 1.34c-.136.22-.219.438-.219.684v1.285h6.262v-.52c-.465-.355-.847-.847-1.12-1.394a4.2 4.2 0 0 1-.438-1.395m-1.532-1.695a2.6 2.6 0 0 1-.875-.601 2.75 2.75 0 0 1-.82-1.996c0-.766.273-1.45.82-1.997a2.75 2.75 0 0 1 1.996-.82c.793 0 1.45.274 1.997.82.574.547.847 1.23.847 1.997 0 .765-.273 1.449-.848 1.996a2.5 2.5 0 0 1-.847.601c-.164.055-.3.11-.465.164a5 5 0 0 1-.684.055c-.41 0-.765-.055-1.12-.219m-.246-1.23c.383.41.82.574 1.367.574s.985-.164 1.395-.574c.383-.383.574-.82.574-1.367s-.191-.985-.574-1.368c-.41-.383-.848-.574-1.395-.574-.546 0-.984.191-1.367.574-.41.383-.574.82-.574 1.367s.164.985.574 1.368m6.371 8.504 1.286-1.286-.985-.957.985-.957-.793-.82c.437-.164.765-.437 1.039-.793.246-.383.382-.793.382-1.285a2.2 2.2 0 0 0-.656-1.586 2.15 2.15 0 0 0-1.586-.656c-.629 0-1.148.219-1.586.656a2.15 2.15 0 0 0-.656 1.586c0 .52.137.957.438 1.367.3.383.683.656 1.148.793v2.98zm-.328-5.77a.73.73 0 0 1-.601-.3.75.75 0 0 1 0-.684c.136-.192.355-.328.601-.301a.59.59 0 0 1 .574.3.62.62 0 0 1 0 .684c-.109.192-.328.301-.574.301' />
    </g>
    <defs>
      <clipPath id='f2dca19e40360724982fcf6d4f10d332__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeySmRegularIcon);
export default ForwardRef;
