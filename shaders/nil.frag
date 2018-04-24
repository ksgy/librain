/*
 * CDDL HEADER START
 *
 * This file and its contents are supplied under the terms of the
 * Common Development and Distribution License ("CDDL"), version 1.0.
 * You may only use this file in accordance with the terms of version
 * 1.0 of the CDDL.
 *
 * A full copy of the text of the CDDL should have accompanied this
 * source.  A copy of the CDDL is also available via the Internet at
 * http://www.illumos.org/license/CDDL.
 *
 * CDDL HEADER END
*/
/*
 * Copyright 2018 Saso Kiselkov. All rights reserved.
 */

#version 460

layout(location = 50) in vec3	tex_norm;
layout(location = 51) in vec2	tex_coord;

layout(location = 0) out vec4	color_out;

void
main()
{
	color_out = vec4(tex_coord.s, tex_coord.t, 0, 1);
}