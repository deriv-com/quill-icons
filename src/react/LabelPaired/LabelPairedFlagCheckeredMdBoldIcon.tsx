import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredMdBoldIcon = (
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
      <path d='M.75 4a.76.76 0 0 1 .75.75v.875l2.656-.656c1.188-.282 2.438-.157 3.532.406a5.16 5.16 0 0 0 4.593 0l.313-.156c.625-.313 1.406.156 1.406.875v8.718a.99.99 0 0 1-.656.938l-1.094.406a5.5 5.5 0 0 1-4.437-.218A5.56 5.56 0 0 0 4 15.5l-2.5.625v3.125a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V4.75A.74.74 0 0 1 .75 4m.75 4.719L4 8.188V6.562l-2.5.625zm0 1.531v1.469l2.5-.531v-1.47zm0 3v1.344l2.125-.531.375-.094v-1.25zm4 .594a7.3 7.3 0 0 1 3 .75V13.03l-1.75-.5a3.4 3.4 0 0 0-1.25-.125zM10 15a3.66 3.66 0 0 0 1.719-.25l.781-.281V13l-.812.188c-.563.156-1.126.187-1.688.156zm2.5-3.531V10l-.812.188c-.563.156-1.126.187-1.688.156v1.5c.438.031.906 0 1.344-.094zm0-3V6.906c-.812.344-1.656.5-2.5.5v1.407c.438.062.906.03 1.344-.063zm-4-1.219a7.5 7.5 0 0 1-1.469-.531A4 4 0 0 0 5.5 6.312v1.594a5.2 5.2 0 0 1 1.688.188l1.312.375zm0 2.781-1.75-.5a3.4 3.4 0 0 0-1.25-.125v1.5a5.2 5.2 0 0 1 1.688.188l1.312.375z' />
    </g>
    <defs>
      <clipPath id='ee9fe2d5d7193c242e168adc2a7ace53__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredMdBoldIcon);
export default ForwardRef;
