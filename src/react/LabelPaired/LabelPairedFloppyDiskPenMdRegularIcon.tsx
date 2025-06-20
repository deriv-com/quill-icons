import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 7v10c0 .563.438 1 1 1h6.313l-.25 1H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h7.656c.531 0 1.031.219 1.406.594l2.344 2.343c.375.375.594.875.594 1.407v1.562l-1 1V9.344c0-.281-.125-.531-.312-.719l-2.313-2.312c-.125-.125-.25-.188-.375-.25V9c0 .563-.469 1-1 1H3c-.562 0-1-.437-1-1V6c-.562 0-1 .469-1 1m2-1v3h6V6zm2.5 8c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281M7 16.5a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C5.28 12 6.093 11.5 7 11.5c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5-.469.781-1.281 1.25-2.156 1.25m9.188-4.219a.442.442 0 0 0-.688 0l-.781.75 1.25 1.25.781-.75c.188-.219.188-.531 0-.719zm-5.5 4.781c-.063.063-.094.157-.126.25l-.374 1.532 1.53-.407c.063 0 .157-.062.22-.125L15.25 15 14 13.75zm4.093-5.5a1.49 1.49 0 0 1 2.125 0l.532.532a1.49 1.49 0 0 1 0 2.125l-4.782 4.812a2 2 0 0 1-.719.407L9.595 20c-.156.063-.344 0-.469-.125A.52.52 0 0 1 9 19.406l.594-2.343c.062-.25.187-.5.375-.688z' />
    </g>
    <defs>
      <clipPath id='b1bed7757868c53ea0e1a5389037d100__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenMdRegularIcon);
export default ForwardRef;
