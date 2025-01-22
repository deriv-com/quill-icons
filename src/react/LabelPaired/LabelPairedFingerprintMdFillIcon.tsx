import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintMdFillIcon = (
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
      <path d='M1.5 12v1.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V12c0-4.406 3.563-8 8-8a7.99 7.99 0 0 1 6.063 2.813.78.78 0 0 1-.094 1.062.78.78 0 0 1-1.063-.094C11.72 6.406 9.97 5.5 8 5.5c-3.594 0-6.5 2.938-6.5 6.5m14.313-1.625c.124.531.187 1.063.187 1.625v1.281a.76.76 0 0 1-.75.75.74.74 0 0 1-.75-.75v-1.25c0-.469-.062-.937-.156-1.375-.094-.375.187-.781.594-.875s.78.188.874.594M8 6.5c3.031 0 5.5 2.469 5.5 5.5v.781c0 .875-.062 1.75-.156 2.594a.74.74 0 0 1-.75.625c-.438 0-.813-.406-.75-.844.094-.781.156-1.562.156-2.375V12c0-2.187-1.812-4-4-4-.375 0-.719.063-1.062.156a.89.89 0 0 1-.907-.25c-.343-.375-.218-.968.25-1.125A5.2 5.2 0 0 1 8 6.5M4.688 8.656c.25.313.25.75 0 1.063A4.1 4.1 0 0 0 4 12v.781c0 .906-.125 1.813-.312 2.688C3.625 15.78 3.312 16 3 16a.775.775 0 0 1-.75-.969c.156-.719.25-1.469.25-2.25V12c0-1.25.406-2.437 1.125-3.344.281-.344.781-.312 1.063 0M8 9a3 3 0 0 1 3 3v.781c0 1.25-.125 2.5-.375 3.688a.67.67 0 0 1-.656.531.703.703 0 0 1-.688-.844 17 17 0 0 0 .344-3.375V12c0-.875-.75-1.625-1.625-1.625-.906 0-1.625.75-1.625 1.625v.781c0 1.281-.187 2.531-.5 3.75a.68.68 0 0 1-.656.469c-.469 0-.782-.437-.657-.906A13 13 0 0 0 5 12.78V12a3 3 0 0 1 3-3m.75 3v.781c0 2.063-.406 4.094-1.125 6.031l-.187.47c-.157.374-.594.593-.97.437-.374-.157-.593-.594-.437-.969l.188-.469a15.1 15.1 0 0 0 1.031-5.5V12a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='38deb574959c6927d4f4935fcc500252__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintMdFillIcon);
export default ForwardRef;
