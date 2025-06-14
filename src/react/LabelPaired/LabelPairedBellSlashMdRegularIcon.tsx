import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashMdRegularIcon = (
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
      <path d='M11.813 16v.031l1.28 1H4.376a1.4 1.4 0 0 1-1.406-1.406c0-.344.156-.719.406-.969l.094-.094C4.438 13.595 5 12.283 5 10.939v-.313l.969.75a6.37 6.37 0 0 1-1.782 3.906l-.093.063a.5.5 0 0 0-.094.281c0 .219.156.375.375.375zM9.5 5.031V4.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v.531C13 5.281 15 7.406 15 10v.938c0 1.343.531 2.656 1.5 3.624l.094.094c0 .031.031.031.062.063l-2.343-1.844A5.9 5.9 0 0 1 14 10.938V10c0-2.187-1.812-4-4-4a3.99 3.99 0 0 0-2.875 1.219l-.781-.625A4.93 4.93 0 0 1 9.5 5.03m-.469 13.313c.156.406.531.656.969.656.406 0 .781-.25.938-.656.093-.25.374-.407.624-.313.282.094.407.375.313.657A1.99 1.99 0 0 1 10 20a2.005 2.005 0 0 1-1.906-1.312.524.524 0 0 1 .312-.657c.25-.093.531.063.625.313M.781 4.125l19.032 15c.187.156.25.5.062.688a.467.467 0 0 1-.687.093l-19-15c-.22-.156-.282-.5-.094-.687.156-.219.5-.282.687-.094' />
    </g>
    <defs>
      <clipPath id='f70a82339b4846d4a358a5fcdd6d3616__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashMdRegularIcon);
export default ForwardRef;
