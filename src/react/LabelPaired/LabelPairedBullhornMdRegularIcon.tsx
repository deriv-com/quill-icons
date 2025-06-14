import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 5.406a.255.255 0 0 0-.437-.187l-.75.781C10.5 7.375 8.813 8.344 7 8.75v5.531a9.4 9.4 0 0 1 4.813 2.75l.75.782c.156.156.437.03.437-.188zm-7 8.719V8.906c-.187.031-.375.031-.562.063L4.5 9H2c-.562 0-1 .469-1 1v3c0 .563.438 1 1 1h2.5l.938.063c.187 0 .375.03.562.062m5.844-9.594C12.594 3.72 14 4.25 14 5.406v12.219c0 1.125-1.406 1.688-2.156.875l-.75-.781A8.54 8.54 0 0 0 6 15.125v3.125C6 19.219 5.219 20 4.25 20h-.5C2.781 20 2 19.219 2 18.25V15c-1.125 0-2-.875-2-2v-3c0-1.094.875-2 2-2h2.469l.906-.031a8.48 8.48 0 0 0 5.719-2.657zM3 15v3.25c0 .438.313.75.75.75h.5a.74.74 0 0 0 .75-.75v-3.219L4.469 15zm12.5-5c.25 0 .5.25.5.5v2c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-2c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='e8888da8ad4273fb4d56a4ac17e630b0__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornMdRegularIcon);
export default ForwardRef;
