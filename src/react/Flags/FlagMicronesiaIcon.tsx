import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagMicronesiaIcon = (
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
    <path
      fill='#75B2DD'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M12 5.487 11.025 6l.186-1.086-.788-.769 1.09-.157L12 3l.487.988 1.09.157-.79.77.187 1.084M12 10.513l.974-.513-.185 1.085.787.77-1.089.157L12 13l-.487-.988-1.09-.157.79-.77-.187-1.084M7.909 7.06l1.085-.186-.512.975.512.975-1.085-.187-.769.79-.157-1.09-.988-.487.988-.488.158-1.09M16.09 7.061l.768-.789.16 1.09.986.488-.987.486-.159 1.09-.768-.788-1.085.187.513-.976-.513-.974'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagMicronesiaIcon);
export default ForwardRef;
