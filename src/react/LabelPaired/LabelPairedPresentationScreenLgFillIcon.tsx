import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.5h20c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25v8.75c0 1.406-1.133 2.5-2.5 2.5h-6.25v1.367l2.734 2.774c.508.468.508 1.289 0 1.757a1.205 1.205 0 0 1-1.757 0L11.5 22.922l-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757l2.773-2.774V19.25H4a2.47 2.47 0 0 1-2.5-2.5V8C.797 8 .25 7.453.25 6.75c0-.664.547-1.25 1.25-1.25M4 8v8.75h15V8z' />
    </g>
    <defs>
      <clipPath id='bdca08c1301c30cadb125bfa6bce62dc__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenLgFillIcon);
export default ForwardRef;
