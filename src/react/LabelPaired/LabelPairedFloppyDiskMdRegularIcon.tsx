import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskMdRegularIcon = (
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
      <path d='M1 7v10c0 .563.438 1 1 1h10c.531 0 1-.437 1-1V9.344c0-.281-.125-.531-.312-.719l-2.313-2.312c-.125-.125-.25-.188-.375-.25V9c0 .563-.469 1-1 1H3c-.562 0-1-.437-1-1V6c-.562 0-1 .469-1 1m2-1v3h6V6zM0 7c0-1.094.875-2 2-2h7.656c.531 0 1.031.219 1.406.594l2.344 2.343c.375.375.594.875.594 1.407V17c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm8.5 7c0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281 0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313M7 11.5c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5-.469.781-1.281 1.25-2.156 1.25a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C5.28 12 6.093 11.5 7 11.5' />
    </g>
    <defs>
      <clipPath id='d522d51c69dab5fd0c71eae8d8a69e1b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskMdRegularIcon);
export default ForwardRef;
