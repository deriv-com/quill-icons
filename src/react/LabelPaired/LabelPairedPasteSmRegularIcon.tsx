import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.719 5.172c-.028.191-.219.328-.438.328h-.219a.45.45 0 0 0-.437.438v.437h3.5v-.437a.47.47 0 0 0-.437-.438H5.44a.44.44 0 0 1-.437-.328c-.055-.3-.328-.547-.629-.547a.675.675 0 0 0-.656.547m.656-1.422c.602 0 1.121.383 1.367.875H7c.957 0 1.75.793 1.75 1.75h-.875A.9.9 0 0 0 7 5.5h-.082c.055.137.082.3.082.438v.492c-.547.11-1.012.41-1.312.82H2.625a.864.864 0 0 1-.875-.875v-.437c0-.137.027-.301.055-.438H1.75a.88.88 0 0 0-.875.875v7.875c0 .492.383.875.875.875h3.5V16h-3.5C.766 16 0 15.234 0 14.25V6.375c0-.957.766-1.75 1.75-1.75h1.23a1.57 1.57 0 0 1 1.395-.875m7.875 13.125a.88.88 0 0 0 .875-.875v-5.578a.44.44 0 0 0-.137-.3l-1.86-1.86a.44.44 0 0 0-.3-.137H7.875A.88.88 0 0 0 7 9v7c0 .492.383.875.875.875zm1.34-7.383c.246.246.41.602.41.93V16c0 .984-.793 1.75-1.75 1.75H7.875c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75h2.953c.328 0 .684.137.93.383z' />
    </g>
    <defs>
      <clipPath id='d0c4625e222f2d56c6e029dc673db0ba__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteSmRegularIcon);
export default ForwardRef;
