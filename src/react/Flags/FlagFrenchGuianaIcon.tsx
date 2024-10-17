import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagFrenchGuianaIcon = (
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
      fill='#078930'
      d='M22 0H2C1.508 0 1.057.178.71.473l10.297 6.864.758-.11.735-1.489.735 1.49 1.643.237-1.19 1.16.097.564 9.507 6.338c.434-.366.709-.915.709-1.527V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#FCDD09'
      d='M2 16h20c.492 0 .943-.178 1.291-.473L13.784 9.19l.183 1.072-1.468-.773-1.47.774.28-1.638-1.188-1.16.884-.127L.71.473A2 2 0 0 0 0 2v12a2 2 0 0 0 2 2'
    />
    <path
      fill='#DA121A'
      fillRule='evenodd'
      d='m12.5 9.488-1.47.774.28-1.638-1.189-1.16 1.643-.237.735-1.489.735 1.49 1.643.237-1.19 1.16.28 1.636'
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
const ForwardRef = forwardRef(FlagFrenchGuianaIcon);
export default ForwardRef;
