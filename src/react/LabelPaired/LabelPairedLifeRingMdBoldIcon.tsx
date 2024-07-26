import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingMdBoldIcon = (
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
      <path d='M12.031 17.125 9.5 14.594c-.437.281-.969.406-1.5.406-.562 0-1.094-.125-1.531-.406l-2.532 2.531A6.57 6.57 0 0 0 8 18.5c1.5 0 2.906-.5 4.031-1.375m2.125 0 .344.375a.684.684 0 0 1 0 1.031.684.684 0 0 1-1.031 0l-.375-.343C11.688 19.313 9.938 20 8 20c-1.969 0-3.719-.687-5.125-1.812l-.375.343a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l.343-.344C.688 15.719 0 13.969 0 12c0-1.937.688-3.687 1.813-5.094l-.344-.375c-.313-.281-.313-.75 0-1.062.281-.282.75-.282 1.062 0l.344.375C4.281 4.719 6.031 4 8 4c1.938 0 3.688.719 5.094 1.844l.375-.344c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031l-.375.375C15.281 8.313 16 10.063 16 12c0 1.969-.719 3.719-1.844 5.125m-1.062-1.062A6.6 6.6 0 0 0 14.5 12c0-1.5-.531-2.906-1.406-4.031L10.563 10.5c.28.438.437.969.437 1.5 0 .563-.156 1.094-.437 1.531zM12.03 6.906A6.58 6.58 0 0 0 8 5.5a6.6 6.6 0 0 0-4.062 1.406l2.53 2.532A2.8 2.8 0 0 1 7.969 9a2.83 2.83 0 0 1 1.532.438zm-6.625 6.625c-.281-.437-.406-.969-.406-1.5 0-.562.125-1.094.406-1.531L2.875 7.969A6.55 6.55 0 0 0 1.5 12c0 1.531.5 2.938 1.375 4.063zM6.5 12c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281' />
    </g>
    <defs>
      <clipPath id='073d85a792fe61da667c25abfbc35263__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingMdBoldIcon);
export default ForwardRef;
