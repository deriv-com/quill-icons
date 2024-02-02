import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUbuntuMdIcon = (
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
      <path d='M8 4.25q2.157.03 3.906 1.063a7.74 7.74 0 0 1 2.781 2.78Q15.72 9.845 15.75 12q-.03 2.157-1.062 3.906a7.74 7.74 0 0 1-2.782 2.781Q10.156 19.72 8 19.75q-2.156-.03-3.906-1.062a7.74 7.74 0 0 1-2.782-2.782Q.283 14.156.25 12q.03-2.156 1.063-3.906a7.74 7.74 0 0 1 2.78-2.781Q5.845 4.28 8 4.25m1.656 2.906q-.219.375-.094.75.095.375.438.625.375.187.781.094a1.1 1.1 0 0 0 .594-.469q.187-.375.094-.75A.95.95 0 0 0 11 6.781q-.375-.187-.75-.093-.375.093-.594.468M2.97 13a.97.97 0 0 0 .719-.281.97.97 0 0 0 .28-.719.97.97 0 0 0-.28-.719.97.97 0 0 0-.72-.281q-.406 0-.687.281A.97.97 0 0 0 2 12q0 .438.281.719A.94.94 0 0 0 2.97 13m.906.094q.438 1.562 1.75 2.469l.75-1.25Q5.157 13.406 5.156 12q0-1.406 1.219-2.312l-.75-1.25q-1.312.906-1.75 2.468.5.469.5 1.094 0 .656-.5 1.094M11 17.219a.95.95 0 0 0 .469-.625q.093-.375-.094-.75a1.1 1.1 0 0 0-.594-.469 1.13 1.13 0 0 0-.781.094.97.97 0 0 0-.437.625q-.126.375.093.75t.594.468q.375.095.75-.093m.031-2.188q1.095-1.094 1.25-2.75l-1.437-.031q-.22 1.5-1.406 2.219-1.22.687-2.626.125l-.718 1.25q1.125.5 1.968.437.844-.062 1.063-.156.125-.687.688-1 .561-.312 1.218-.094m-.187-3.281 1.437-.031q-.156-1.656-1.281-2.75a1.4 1.4 0 0 1-1.187-.094q-.564-.312-.688-1h-.031q-.188-.094-1.031-.156-.845-.063-1.97.437l.72 1.281q1.406-.593 2.625.094 1.187.72 1.406 2.219' />
    </g>
    <defs>
      <clipPath id='cf633c4deeab0e9c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuMdIcon);
export default ForwardRef;
