import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageXlBoldIcon = (
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
      <path d='M3 9h24q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24V12q.047-1.266.89-2.11Q1.735 9.048 3 9m24 2.25H15v13.5h12q.704-.046.75-.75V12q-.046-.703-.75-.75m-18.656 3q-.235-.516-.844-.562-.609.045-.844.562l-3 6.75q-.28.797.469 1.219.797.28 1.219-.469l.422-.937h3.468l.422.937q.422.75 1.219.469.75-.423.469-1.219zm.047 4.688H6.609l.891-2.016zm12.984-5.25q.844.093.938.937v.188h2.812q.844.093.938.937-.094.844-.938.938h-.094l-.093.234a9.2 9.2 0 0 1-1.829 3.047l.047.047q.048 0 .047.047l.89.515q.705.516.329 1.266-.516.702-1.266.328l-.89-.516a4 4 0 0 1-.61-.422 8.2 8.2 0 0 1-1.593.938l-.188.047q-.796.28-1.219-.469-.28-.796.469-1.219l.188-.093q.42-.188.843-.47l-.562-.562q-.562-.656 0-1.312.656-.562 1.312 0l.703.703a7.3 7.3 0 0 0 1.407-2.11H18q-.844-.094-.937-.937.094-.844.937-.937h2.438v-.188q.094-.844.937-.937' />
    </g>
    <defs>
      <clipPath id='5d01c4c21c7cc8bea2dc5482bed6a55f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageXlBoldIcon);
export default ForwardRef;
