import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.836 23.977.273 17.102q-.546-.704.04-1.329.663-.546 1.289 0l4.96 5.196V7.687q.079-.859.938-.937.859.078.938.938v13.28l4.96-5.155q.625-.586 1.329-.04.546.626 0 1.329l-6.563 6.875a.9.9 0 0 1-.664.273.9.9 0 0 1-.664-.273' />
    </g>
    <defs>
      <clipPath id='b681cf3c93f0b52ed44c08c7859447e2__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLgBoldIcon);
export default ForwardRef;
