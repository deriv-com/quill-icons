import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapMdFillIcon = (
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
      <path d='M10 5c.25 0 .5.063.719.156L19.5 8.313a.743.743 0 0 1 0 1.406l-8.781 3.156c-.219.094-.469.125-.75.125-.25 0-.5-.031-.719-.125l-5-1.812c.281-.282.625-.5 1-.657l4.906-1.937c.281-.094.406-.375.281-.656a.485.485 0 0 0-.624-.282L4.906 9.47a3.8 3.8 0 0 0-1.562 1.125 4.25 4.25 0 0 0-.844 2.531v.781c.188.406.313.875.406 1.313.188.844.344 2.062.063 3.406-.031.125-.094.25-.219.313a.54.54 0 0 1-.375.062l-2-.5A.48.48 0 0 1 0 18.188a.62.62 0 0 1 .094-.47c.25-.374.5-.78.687-1.187.375-.718.719-1.625.719-2.531v-.875c0-1 .281-1.937.781-2.75L.47 9.719C.188 9.625 0 9.344 0 9c0-.312.188-.594.469-.687L9.25 5.156C9.469 5.063 9.719 5 10 5M4 16.75l.469-4.531 4.437 1.594c.344.124.719.187 1.094.187.344 0 .719-.062 1.063-.187l4.437-1.594.5 4.531c0 1.125-2.687 2.25-6 2.25-3.312 0-6-1.125-6-2.25' />
    </g>
    <defs>
      <clipPath id='52ba4bcca8b464a2621b275fbca3f289__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapMdFillIcon);
export default ForwardRef;
