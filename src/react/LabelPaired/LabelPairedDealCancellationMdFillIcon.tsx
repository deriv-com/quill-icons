import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.563 16.594v-.032l.03.032c.5.187 1.095.281 1.688.281.875 0 1.625-.187 2.219-.594q.891-.609 1.406-1.687l.188-.406-2.407-1.407-.187.563c-.094.25-.25.5-.469.687-.156.125-.375.219-.75.219-.406 0-.687-.125-.906-.344s-.344-.594-.344-1.187v-1.344c0-.594.125-.937.344-1.156.219-.25.5-.375.906-.375s.594.094.719.187c.156.156.281.344.375.625l.188.563 2.5-1.313-.188-.437q-.468-1.125-1.406-1.688c-.594-.406-1.344-.562-2.188-.562-.625 0-1.187.093-1.719.312-.53.25-.968.563-1.343 1a4.2 4.2 0 0 0-.844 1.563c-.187.594-.281 1.281-.281 2.031s.094 1.406.281 2v.031q.282.845.844 1.5c.375.406.812.719 1.344.938M5.687 7.375c.594 0 1.188.094 1.688.281.531.219 1 .5 1.375.938.375.406.656.906.844 1.469.187.593.281 1.25.281 2 0 .718-.094 1.406-.281 1.968v.031a4 4 0 0 1-.844 1.47 3.4 3.4 0 0 1-1.375.906c-.5.218-1.062.312-1.687.312H2.03V7.375zm.938 6.438c.188-.188.313-.5.313-1.126v-1.28c0-.626-.125-.938-.313-1.094-.187-.22-.469-.344-.937-.344h-.813v4.156h.813c.468 0 .75-.125.937-.312' />
    </g>
    <defs>
      <clipPath id='ecc7dae30453a1b571c2cd5a8234924d__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationMdFillIcon);
export default ForwardRef;
