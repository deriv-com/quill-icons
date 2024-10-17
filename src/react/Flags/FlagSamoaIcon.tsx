import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSamoaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path fill='#CE1126' d='M13 0h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8h13z' />
      <path fill='#002B7F' d='M13 0v8H0V2a2 2 0 0 1 2-2z' />
      <path
        fill='#fff'
        d='m6.508 2.045-.41.215.079-.456-.332-.322.458-.067L6.508 1l.205.415.458.066-.331.324.078.455M6.508 6.785 6.098 7l.079-.456-.332-.323.458-.066.205-.415.205.414.458.067-.331.323.078.456M5.182 3.83l-.41.216.079-.456-.331-.323.458-.066.204-.416.205.415.458.067-.331.323.078.456M7.983 3.727l-.307.161.059-.342-.249-.242.344-.05.153-.311.154.311.343.05-.248.243.059.341M7.502 5.094l-.204.107.039-.228-.166-.161.229-.033.102-.208.103.207.229.034-.166.161.04.228'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(FlagSamoaIcon);
export default ForwardRef;
