import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5v6.75c0 .844-.68 1.5-1.5 1.5H7.242l-2.906 2.18c-.117.093-.258.093-.399.047a.39.39 0 0 1-.187-.352V13.25H1.5a1.48 1.48 0 0 1-1.5-1.5zm3.563 1.875A.555.555 0 0 0 3 7.438c0 .328.234.562.563.562h4.874A.555.555 0 0 0 9 7.438a.57.57 0 0 0-.562-.563zm0 2.25A.555.555 0 0 0 3 9.688c0 .328.234.562.563.562h2.625a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563z' />
    </g>
    <defs>
      <clipPath id='f18315cf50c70e53b172c7a776372403__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesCaptionFillIcon);
export default ForwardRef;
