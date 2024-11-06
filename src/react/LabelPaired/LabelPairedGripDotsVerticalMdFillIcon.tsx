import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 8.5a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75.531 0 1 .313 1.281.75.281.469.281 1.063 0 1.5-.281.469-.75.75-1.281.75m0 5a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75.531 0 1 .313 1.281.75.281.469.281 1.063 0 1.5-.281.469-.75.75-1.281.75M3 17c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 0 17c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0C2.688 16 3 16.469 3 17m3.5-8.5a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5-.281.469-.75.75-1.281.75M8 12c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 5 12c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0C7.688 11 8 11.469 8 12m-1.5 6.5a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5-.281.469-.75.75-1.281.75' />
    </g>
    <defs>
      <clipPath id='0c565c4d1e5c825534fb400f79d1180a__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalMdFillIcon);
export default ForwardRef;
