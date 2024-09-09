import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.625 17.781a.95.95 0 0 1-1.062.125A.97.97 0 0 1 0 17V7c0-.375.219-.719.563-.906.343-.157.75-.094 1.062.156l6 5 .375.281V7c0-.531.438-1 1-1 .531 0 1 .469 1 1v10c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-4.531l-.375.312z' />
    </g>
    <defs>
      <clipPath id='1009bd61a5cc07fae8b7648aad6202f4__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepMdFillIcon);
export default ForwardRef;
