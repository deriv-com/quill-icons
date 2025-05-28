import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceMdBoldIcon = (
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
      <path d='M13.063 7.094a5.5 5.5 0 0 1 1.624 3.937h.813A6.42 6.42 0 0 0 13.625 6.5c-.281-.25-.562-.5-.844-.719l-.312-.187a9.4 9.4 0 0 0-1.125-.563l-.375-.125-.438-.093a4.2 4.2 0 0 0-1.062-.157l-.375-.031h-.969l2.438 2.438.28-.282.282-.281-.969-.969c.063.032.125.032.219.063l.344.093.344.125c.343.125.656.282.968.47l.281.155q.375.282.75.657M3.124 17c-1.094-1.094-1.656-2.5-1.656-3.937H.687c0 1.624.626 3.28 1.876 4.53.25.25.562.5.843.72l.313.187q.516.328 1.125.563l.375.125.406.093a4.4 4.4 0 0 0 1.094.157l.375.03h.937L5.625 17l-.281.281-.282.282.97 1c-.063-.032-.157-.032-.22-.063l-.343-.094-.344-.125a5.5 5.5 0 0 1-.969-.468l-.281-.157c-.25-.187-.531-.406-.75-.656m10.188-2.562L10.5 17.28a1.454 1.454 0 0 1-2 0l-5.656-5.656c-.531-.562-.531-1.437 0-1.969l2.844-2.844a1.415 1.415 0 0 1 1.968 0l5.657 5.657c.562.562.562 1.437 0 1.969M5.969 8.78 4.844 9.937c-.25.22-.625.22-.844 0l-.156-.156-.406.438c-.25.219-.25.594 0 .844l5.656 5.656c.219.218.594.218.844 0l2.812-2.844c.25-.219.25-.594 0-.844L7.094 7.375c-.219-.219-.594-.219-.844 0l-.437.438.156.125c.218.25.218.625 0 .843m-.5-.406-.219-.219L4.188 9.22l.218.219z' />
    </g>
    <defs>
      <clipPath id='1acd417d6294fc1062bbdc00bfe951e1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceMdBoldIcon);
export default ForwardRef;
