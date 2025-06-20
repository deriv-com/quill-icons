import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 18.5h1V20H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407V13h-1.5V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5M5.5 15h1c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 6.5 20h-1a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5m.5 4h.5c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5H6zm8.25-4h.5c.688 0 1.25.563 1.25 1.25v.25c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.25a.27.27 0 0 0-.25-.25h-.5a.247.247 0 0 0-.25.25v2.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25v-.25c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.25c0 .719-.562 1.25-1.25 1.25h-.5c-.719 0-1.25-.531-1.25-1.25v-2.5c0-.687.531-1.25 1.25-1.25M9 16.25c0-.687.531-1.25 1.25-1.25h.5c.688 0 1.25.563 1.25 1.25v2.5c0 .719-.562 1.25-1.25 1.25h-.5C9.531 20 9 19.469 9 18.75zm1.25-.25a.247.247 0 0 0-.25.25v2.5c0 .156.094.25.25.25h.5c.125 0 .25-.094.25-.25v-2.5a.27.27 0 0 0-.25-.25z' />
    </g>
    <defs>
      <clipPath id='3a948b4085cc185a0eeac4bebb15b990__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocMdBoldIcon);
export default ForwardRef;
