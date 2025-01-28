import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 7.5c0 1.406-1.125 2.5-2.5 2.5a2.5 2.5 0 0 1-1.844-.781l-4.719 2.375c.032.125.063.281.063.406 0 .156-.031.313-.062.438l4.718 2.343A2.63 2.63 0 0 1 11.5 14c1.375 0 2.5 1.125 2.5 2.5 0 1.406-1.125 2.5-2.5 2.5A2.47 2.47 0 0 1 9 16.5c0-.281.031-.594.125-.844l-4.531-2.281C4.125 14.063 3.375 14.5 2.5 14.5A2.47 2.47 0 0 1 0 12c0-1.375 1.094-2.5 2.5-2.5.875 0 1.625.469 2.094 1.156l4.531-2.281A2.7 2.7 0 0 1 9 7.5C9 6.125 10.094 5 11.5 5 12.875 5 14 6.125 14 7.5m-11.5 6c.531 0 1-.281 1.281-.75.281-.437.281-1.031 0-1.5-.281-.437-.75-.75-1.281-.75-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75m10.5-6c0-.531-.312-1-.75-1.281-.469-.282-1.062-.282-1.5 0-.469.281-.75.75-.75 1.281 0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313M11.5 18c.531 0 1-.281 1.281-.75.281-.437.281-1.031 0-1.5-.281-.437-.75-.75-1.281-.75-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75' />
    </g>
    <defs>
      <clipPath id='558d546b14a0c41f036abb3ac540184e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesMdRegularIcon);
export default ForwardRef;
