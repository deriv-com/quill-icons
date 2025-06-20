import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.063 5.188c.28.187.437.5.437.812v3h.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.5V7.406l-.187.063a1.054 1.054 0 0 1-1.282-.625 1.054 1.054 0 0 1 .625-1.282l1.5-.5c.313-.093.656-.03.906.157zM5 5c.281 0 .531.125.719.344l2.75 3a.99.99 0 0 1-.063 1.406A.99.99 0 0 1 7 9.688L6 8.594V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1V8.594L2.969 9.688a.99.99 0 0 1-1.406.062.99.99 0 0 1-.063-1.406l2.75-3A1 1 0 0 1 5 5m8.906 10.406a.96.96 0 0 0 .469-1.312.997.997 0 0 0-1.312-.5c-.5.25-.72.844-.47 1.344.22.5.813.718 1.313.468m-1.25 1.719c-1.125-.344-1.906-1.375-1.906-2.625 0-1.5 1.219-2.75 2.75-2.75 1.5 0 2.75 1.25 2.75 2.75 0 .75-.25 1.469-.687 2.063l-1.532 2.03c-.312.47-.937.563-1.406.22-.437-.313-.531-.938-.187-1.407z' />
    </g>
    <defs>
      <clipPath id='bfdc0dde69b534df886fea92c4058cca__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineMdFillIcon);
export default ForwardRef;
