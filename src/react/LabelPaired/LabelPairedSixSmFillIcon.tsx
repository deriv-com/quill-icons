import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.469 6.074-1.75 2.078c2.297.11 4.156 2.024 4.156 4.348A4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5v-.11a4.42 4.42 0 0 1 1.04-2.761l3.964-4.676c.3-.383.875-.41 1.23-.11.383.302.41.876.11 1.231m.656 6.426c0-.93-.52-1.777-1.312-2.27a2.65 2.65 0 0 0-2.625 0c-.82.493-1.313 1.34-1.313 2.27 0 .957.492 1.805 1.313 2.297a2.65 2.65 0 0 0 2.625 0c.792-.492 1.312-1.34 1.312-2.297' />
    </g>
    <defs>
      <clipPath id='595434867304beedf52adc90dc60cb40__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixSmFillIcon);
export default ForwardRef;
