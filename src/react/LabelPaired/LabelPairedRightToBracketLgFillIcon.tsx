import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.477 9.64 4.804 4.805c.274.274.469.664.469 1.055 0 .43-.195.82-.469 1.094l-4.804 4.804c-.235.235-.586.352-.938.352a1.3 1.3 0 0 1-1.289-1.29V18h-5C.547 18 0 17.453 0 16.75v-2.5C0 13.586.547 13 1.25 13h5v-2.422c0-.703.586-1.328 1.29-1.328.35 0 .702.156.937.39m5.273 12.11h2.5c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25h-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.5c2.07 0 3.75 1.68 3.75 3.75v10c0 2.07-1.68 3.75-3.75 3.75h-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25' />
    </g>
    <defs>
      <clipPath id='e35adfbd3e1e7ca7907cf76ca3eb1a80__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketLgFillIcon);
export default ForwardRef;
