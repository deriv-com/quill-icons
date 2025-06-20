import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighMdRegularIcon = (
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
      <path d='M4.719 9.875a.45.45 0 0 1-.313.125H1.75a.74.74 0 0 0-.75.75v2.5c0 .438.313.75.75.75h2.656c.094 0 .219.063.313.125L9 17.938V6.094zM9.063 5c.5 0 .937.438.937.938v12.156c0 .5-.437.906-.937.906-.25 0-.47-.062-.626-.219l.344-.375-.344.375L4.188 15H1.75C.781 15 0 14.219 0 13.25v-2.5C0 9.813.781 9 1.75 9h2.438l4.25-3.75A.87.87 0 0 1 9.062 5m3.718 4.625C13.5 10.156 14 11.031 14 12c0 1-.5 1.875-1.219 2.406a.467.467 0 0 1-.687-.094.467.467 0 0 1 .094-.687c.5-.375.812-.969.812-1.625 0-.625-.312-1.219-.812-1.594a.467.467 0 0 1-.094-.687.467.467 0 0 1 .687-.094m1.313-2.187a.57.57 0 0 1 .719-.063C16.125 8.5 17 10.156 17 12c0 1.875-.875 3.531-2.187 4.625a.5.5 0 0 1-.72-.062c-.155-.188-.124-.532.063-.688A4.97 4.97 0 0 0 16 12a4.96 4.96 0 0 0-1.844-3.844c-.219-.187-.219-.5-.062-.719m2.719-2.282C18.75 6.813 20 9.25 20 12s-1.25 5.219-3.187 6.875a.5.5 0 0 1-.72-.062c-.187-.22-.155-.532.063-.688A8.02 8.02 0 0 0 18.97 12a8 8 0 0 0-2.813-6.094c-.218-.187-.25-.5-.062-.687.187-.219.5-.25.718-.063' />
    </g>
    <defs>
      <clipPath id='b60be601af4278ce7021ea4a44039846__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighMdRegularIcon);
export default ForwardRef;
