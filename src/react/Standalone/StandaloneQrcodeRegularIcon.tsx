import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneQrcodeRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M12.875 9h-3.75c-.39.026-.599.234-.625.625v3.75c.026.39.234.599.625.625h3.75c.39-.026.599-.234.625-.625v-3.75c-.026-.39-.234-.599-.625-.625Zm-3.75-1.25h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547ZM12.875 19h-3.75c-.39.026-.599.234-.625.625v3.75c.026.39.234.599.625.625h3.75c.39-.026.599-.234.625-.625v-3.75c-.026-.39-.234-.599-.625-.625Zm-3.75-1.25h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547Zm10-8.75c-.39.026-.599.234-.625.625v3.75c.026.39.234.599.625.625h3.75c.39-.026.599-.234.625-.625v-3.75c-.026-.39-.234-.599-.625-.625h-3.75Zm-1.875.625c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547h3.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-3.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75Zm0 8.75c.026-.39.234-.599.625-.625h2.5c.39.026.599.234.625.625v2.656h2.5v-2.656c.026-.39.234-.599.625-.625.39.026.599.234.625.625v3.281c-.026.39-.234.6-.625.625h-3.75c-.39-.026-.599-.234-.625-.625V19H18.5v5.938c-.026.39-.234.599-.625.625-.39-.026-.599-.235-.625-.625v-6.563Zm-6.563-7.813h.626c.39.027.598.235.624.626v.624c-.025.391-.234.6-.624.626h-.626c-.39-.027-.598-.235-.624-.626v-.624c.025-.391.234-.6.624-.626Zm-.624 10.626c.025-.391.234-.6.624-.625h.626c.39.026.598.234.624.625v.625c-.025.39-.234.599-.624.625h-.626c-.39-.026-.598-.235-.624-.625v-.625Zm10.624-10.625h.625c.391.025.6.234.625.624v.626c-.026.39-.234.598-.625.624h-.625c-.39-.025-.599-.234-.625-.624v-.626c.026-.39.235-.598.625-.624ZM19.75 24c.026-.39.234-.599.625-.625H21c.39.026.599.234.625.625v.625c-.026.39-.234.599-.625.625h-.625c-.39-.026-.599-.234-.625-.625V24Zm3.75-.625h.625c.39.026.599.234.625.625v.625c-.026.39-.234.599-.625.625H23.5c-.39-.026-.599-.234-.625-.625V24c.026-.39.234-.599.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneQrcodeRegularIcon);
export default ForwardRef;