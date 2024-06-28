import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarMdFillIcon = (
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
      <path d='M0 19.063a5.04 5.04 0 0 1 3.781-4.907c.281-.062.5.125.563.375l1.125 4.594L6.53 15.25l-.593-.969c-.188-.344.03-.781.437-.781h1.219c.406 0 .625.438.437.781l-.594.969L8.5 19.125l1.125-4.594a.48.48 0 0 1 .531-.375c-.125.438-.156.875-.156 1.344 0 1.875.906 3.531 2.313 4.5H.938A.92.92 0 0 1 0 19.063M3 8c0-1.406.75-2.75 2-3.437 1.219-.72 2.75-.72 4 0 1.219.687 2 2.03 2 3.437 0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.98 3.98 0 0 1 3 8m8 7.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m2.75-.844c.031.5.344.813.656.969.281.156.625.25.906.313 0 .03.032.03.063.03.313.095.563.157.719.25.125.095.156.126.156.188 0 .063-.031.125-.031.125l-.125.125a1.7 1.7 0 0 1-.594.094c-.281 0-.562-.094-.937-.219-.063 0-.126-.031-.188-.031-.25-.094-.531.063-.625.313-.062.28.063.562.344.625.031.03.094.03.156.062.219.063.469.156.75.188v.375c0 .28.219.5.5.5.25 0 .5-.22.5-.5v-.344q.281-.048.563-.188c.375-.218.687-.593.687-1.156-.031-.5-.344-.812-.656-1-.282-.187-.657-.281-.938-.375h-.031c-.312-.094-.562-.156-.75-.25-.125-.094-.125-.125-.125-.156V14.5a1 1 0 0 1 .156-.125c.156-.062.375-.125.563-.125.281 0 .531.063.844.125.25.094.53-.094.593-.344.063-.281-.093-.562-.375-.625-.156-.031-.343-.062-.531-.094V13c0-.281-.25-.5-.5-.5-.281 0-.5.219-.5.5v.313a1.5 1.5 0 0 0-.562.187c-.376.188-.72.563-.688 1.156' />
    </g>
    <defs>
      <clipPath id='e4a2faa9653aca8cc6c02d85f1681dec__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarMdFillIcon);
export default ForwardRef;
