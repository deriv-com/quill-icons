import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.438 14.953c.609.281.843.985.562 1.547l-3.516 7.453c-.14.235 0 .516.188.61.281.093.515 0 .656-.235l.656-1.453c.047.047.094.14.141.188l.281.656a1.9 1.9 0 0 1 0 1.593l-.468.985a3.68 3.68 0 0 1-2.485 2.062l-.187.047c-1.032.282-2.157.14-3.141-.328l-3.14-1.5c-1.876-.844-2.672-3.094-1.782-4.969l1.219-2.53c.328-.704 1.172-1.032 1.875-.704.328.188.562.469.703.797a1.333 1.333 0 0 1 1.781-.61c.375.141.563.422.703.75a1.45 1.45 0 0 1 1.829-.609c.328.188.562.422.703.75l1.875-3.937c.234-.563.937-.844 1.547-.563m-3 1.969.796-1.64c.422-.891 1.547-1.313 2.485-.891a1.94 1.94 0 0 1 .89 2.53l-.703 1.454a3.02 3.02 0 0 0 2.157-2.906c0-1.64-1.313-3-3-3-1.641 0-3 1.36-3 3 0 .515.14 1.031.375 1.453M24.563 7.5c-.47 0-.891.422-.891.938v19.171c0 .516.422.891.89.891.516 0 .938-.375.938-.89V8.437a.94.94 0 0 0-.937-.938' />
    </g>
    <defs>
      <clipPath id='afe6de20bfceca4be465cd90c7fefd4e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightXlFillIcon);
export default ForwardRef;
