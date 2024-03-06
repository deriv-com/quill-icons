import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.07 5.656q.43-.312.86 0l10.625 9.375q.39.43.039.899-.43.39-.899.039l-1.445-1.29v7.696q-.04 1.328-.898 2.227-.9.858-2.227.898H5.875q-1.328-.04-2.227-.898-.859-.9-.898-2.227V14.68l-1.445 1.289q-.469.351-.899-.04-.351-.468.04-.898zM4 13.586v8.789q.039.78.547 1.328.546.508 1.328.547h11.25q.78-.039 1.328-.547.508-.546.547-1.328v-8.79l-7.5-6.64z' />
    </g>
    <defs>
      <clipPath id='ef58ffc7b0f36286770e04662a6ef10d__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankLgRegularIcon);
export default ForwardRef;
