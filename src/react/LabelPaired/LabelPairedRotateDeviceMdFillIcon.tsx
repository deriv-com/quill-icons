import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceMdFillIcon = (
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
      <path d='M13.25 12.438a1.49 1.49 0 0 1 0 2.124l-2.812 2.844a1.55 1.55 0 0 1-2.126 0L2.657 11.75a1.49 1.49 0 0 1 0-2.125L5.47 6.781a1.55 1.55 0 0 1 2.125 0zm-7.344-4.5c.282.25.282.687 0 .968l-1.125 1.125a.7.7 0 0 1-1 0L3.72 9.97l-.375.344c-.188.218-.188.53 0 .718L9 16.687c.219.188.531.188.719 0l2.844-2.812c.187-.219.187-.531 0-.719L6.906 7.5c-.218-.187-.531-.187-.718 0l-.344.344zm7-.625a4.7 4.7 0 0 0-.75-.625l-.25-.188a5.5 5.5 0 0 0-.969-.469l-.312-.093c-.094-.032-.156-.063-.25-.063l.75.719-.719.718-2.594-2.625h1.563c.375.032.75.094 1.094.157l.437.125.375.125c.406.156.781.343 1.156.562l.313.219c.281.188.594.438.844.719a6.46 6.46 0 0 1 1.906 4.594h-1a5.46 5.46 0 0 0-1.594-3.876m-9.812 9.78c.25.22.5.438.75.626l.25.156c.312.188.625.344.968.469l.344.125c.063.031.157.031.219.062l-.719-.718.719-.72 2.563 2.626H7l-.375-.032a4.4 4.4 0 0 1-1.094-.156l-.406-.093-.406-.157a4.7 4.7 0 0 1-1.125-.531l-.313-.219c-.312-.218-.594-.468-.875-.718A6.46 6.46 0 0 1 .5 13.218h1c0 1.406.531 2.812 1.625 3.875z' />
    </g>
    <defs>
      <clipPath id='79ec9c6b9f004d971976576f6be7d071__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceMdFillIcon);
export default ForwardRef;
