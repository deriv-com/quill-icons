import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateMdBoldIcon = (
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
      <path d='M14 18.5q.47-.03.5-.5V9H12a.97.97 0 0 1-.719-.281A.97.97 0 0 1 11 8V5.5H6q-.469.031-.5.5v2.125a1.7 1.7 0 0 0-1.281 0q-.094.03-.188.063 0 .03-.031.03V6q.03-.843.594-1.406Q5.156 4.032 6 4h5.188q.812 0 1.406.594l2.812 2.812Q16 8 16 8.844V18q-.03.844-.594 1.406-.563.563-1.406.594H6.906Q7 19.75 7 19.5v-1zM3.406 9.063l.5.187a.3.3 0 0 0 .188 0l.5-.187q.531-.189.875.218l.343.438a.4.4 0 0 0 .157.094l.531.062q.532.093.625.625l.094.531q0 .094.093.188l.407.312q.406.375.25.875l-.219.5a.3.3 0 0 0 0 .188l.188.5q.188.5-.22.875l-.437.312a.4.4 0 0 0-.093.188l-.063.531q-.093.531-.625.625l-.5.063V19.5a.49.49 0 0 1-.25.438.54.54 0 0 1-.531-.032L4 19.094l-1.219.812a.48.48 0 0 1-.5.032Q2.001 19.78 2 19.5v-3.312l-.5-.063q-.53-.093-.625-.625l-.062-.531a.4.4 0 0 0-.094-.188L.28 14.47q-.405-.375-.219-.875l.188-.5a.3.3 0 0 0 0-.188l-.187-.5q-.188-.5.218-.875l.438-.312a.4.4 0 0 0 .094-.188l.062-.531q.094-.53.656-.625l.5-.062a.4.4 0 0 0 .188-.094l.312-.438q.375-.406.875-.219M2 13q.03 1.125 1 1.719 1 .562 2 0 .97-.594 1-1.719-.03-1.125-1-1.719-1-.562-2 0-.97.594-1 1.719' />
    </g>
    <defs>
      <clipPath id='481c8afbd924100d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateMdBoldIcon);
export default ForwardRef;
